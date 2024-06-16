import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import ModalAddList from "../components/list/ModalAddList";
import { Ionicons } from "@expo/vector-icons";
import { getList, deleteList } from "../services/listpull.services";
import { useUser } from "../contexts/UseContexts";

export default function MyLists({ navigation }) {
  const isFocused = useIsFocused();
  const [myList, setMyList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useUser();

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const fetchData = async () => {
    try {
      const data = await getList(id);
      setMyList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (listId) => {
    try {
      await deleteList(listId);
      fetchData();
      Alert.alert("Sucesso", "Lista deletada com sucesso!");
    } catch {
      Alert.alert("Erro", "Não foi possível deletar a sua lista.");
    }
  };

  const confirmDelete = (listId) => {
    Alert.alert(
      "Confirmação",
      "Você tem certeza que deseja deletar esta lista?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Deletar",
          onPress: () => handleDelete(listId),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Minhas Listas</Text>
        <View style={styles.flatList}>
          <FlatList
            data={myList}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("List", {
                    id: item.id,
                    nome: item.nome,
                    lista: item.lista
                  })
                }
              >
                <View style={styles.itemContainer}>
                  <Text style={styles.itemText}>{item.nome}</Text>
                  <TouchableOpacity>
                    <Ionicons
                      name={"close-outline"}
                      size={24}
                      color={"#FFF"}
                      onPress={() => confirmDelete(item.id)}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.positionButton}>
          <CustomButton
            title={"Nova Lista"}
            icon={"add"}
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </View>
      </View>
      <ModalAddList
        visible={modalVisible}
        setVisible={setModalVisible}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2B7C7D",
    paddingVertical: 20,
  },
  positionButton: {
    position: "absolute",
    bottom: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  itemContainer: {
    backgroundColor: "#262424",
    borderBottomColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  itemText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  flatList: {
    height: "70%",
  },
});
