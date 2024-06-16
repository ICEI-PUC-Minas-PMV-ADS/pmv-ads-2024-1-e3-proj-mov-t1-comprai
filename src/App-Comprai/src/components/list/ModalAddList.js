import React, { useState } from "react";
import { StyleSheet, Text, Modal, View, TextInput, Alert } from "react-native";
import { postList } from "../../services/listpull.services";
import { useUser } from "../../contexts/UseContexts.js";

import CustomButton from "../CustomButton";

export default function ModalAddList({
  visible,
  setVisible,
  navigation,
}) {
  const [nome, setNome] = useState();
  const { id } = useUser();

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
        setNome();
      }}
    >
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.text}>Adicionar uma nova lista</Text>
          </View>
          <View style={styles.body}>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
              placeholder="Digite o nome da lista"
              placeholderTextColor="white"
            />
          </View>
          <CustomButton
            title={"Salvar"}
            icon={"add"}
            onPress={() => {
              postList({
                idUser: id,
                nome: nome,
                lista: []
              }).then(res => {          
                if (res) {
                  navigation.navigate("List", {
                    id: res.id,
                    nome: nome,
                    lista: [],
                  });
                } else {
                  Alert.alert('Atenção', 'Não foi possível criar a nova lista')
                }
              });
              setNome();
              setVisible(!visible);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#1E1C1C",
  },
  title: {
    alignItems: "center",
    marginBottom: 15,
  },
  body: {
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    height: 40,
    padding: 10,
    marginBottom: 10,
  },
});
