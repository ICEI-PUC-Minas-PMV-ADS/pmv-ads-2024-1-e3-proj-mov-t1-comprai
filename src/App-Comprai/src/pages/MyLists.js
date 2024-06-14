import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import ModalAddList from "../components/list/ModalAddList";
import jsonData from "../DB/listas.json";

import { Ionicons } from "@expo/vector-icons";

export default function MyLists({ navigation }) {
  const [myList, setMyList] = useState(jsonData);
  const [modalVisible, setModalVisible] = useState(false);

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
                    nome: item.nome,
                    listaInicial: item.lista,
                  })
                }
              >
                <View style={styles.itemContainer}>
                  <Text style={styles.itemText}>{item.nome}</Text>
                  <TouchableOpacity>
                    <Ionicons
                      name={"ellipsis-vertical-outline"}
                      size={24}
                      color={"#FFF"}
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
        myList={myList}
        setMyList={setMyList}
        jsonData={jsonData}
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
