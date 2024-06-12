import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, FlatList, Alert, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import { getlistas, deleteLista } from '../services/Lists.services'
import { useIsFocused } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons"

export default function MyLists({ navigation }) {
  const [listas, setListas] = useState([]);
  const isFocused = useIsFocused();

  const fetchListas = async () => {
    try {
      const data = await getlistas();
      setListas(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteLista(id)
      Alert.alert('Sucesso', 'Lista deletada com sucesso!');
      fetchListas();
    } catch {
      Alert.alert('Erro', 'Não foi possível deletar a sua lista.');
    }
  }

  useEffect(() => {
    if (isFocused) {
      fetchListas();
    }
  }, [isFocused]);

  const confirmDelete = (id) => {
    Alert.alert(
      "Confirmação",
      "Você tem certeza que deseja deletar esta lista?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Deletar",
          onPress: () => handleDelete(id)
        }
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
            data={listas}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("List", {
                    nome: item.nome,
                    listaInicial: item.lista,
                  })
                }
              >
                <View style={styles.itemContainer}>
                  <Text style={styles.itemText}>{item.nome}</Text>
                  <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                    <Ionicons name={'close-outline'} size={24} color={'#FFF'} />
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
              navigation.navigate("List", {});
            }}
          />
        </View>
      </View>
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
    width: '90%'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2B7C7D",
    paddingVertical: 20
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  itemText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  flatList: {
    height: '70%'
  }
});
