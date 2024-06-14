import React, { useState } from "react";
import { StyleSheet, Text, Modal, View, TextInput } from "react-native";

import CustomButton from "../CustomButton";

export default function ModalAddItem({ visible, setVisible, lista, setLista }) {
  const [nome, setNome] = useState();
  const [preco, setPreco] = useState();
  const [quantidade, setQuantidade] = useState();

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}
    >
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.text}>Adicionar um novo item</Text>
          </View>
          <View style={styles.body}>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
              placeholder="Digite o nome do item"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              value={quantidade}
              onChangeText={(text) => setQuantidade(text)}
              placeholder="Digite a quantidade"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              value={preco}
              onChangeText={(text) => setPreco(text)}
              placeholder="Digite o preço"
              placeholderTextColor="white"
            />
          </View>
          <CustomButton
            title={"Salvar"}
            icon={"add"}
            onPress={() => {
              lista.push({
                itemChecado: false,
                itemNome: nome,
                itemPreco: preco,
                itemQuantidade: quantidade,
              });
              setLista(lista);
              setNome();
              setQuantidade();
              setPreco();
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
