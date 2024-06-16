import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import CardItem from "../components/list/CardItem";
import ModalAddItem from "../components/list/ModalAddItem";
import { getListById, putList } from "../services/listpull.services";

const f = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 2,
});

export default function List({ navigation, route }) {
  const isFocused = useIsFocused();
  const { id, nome, lista } = route.params;
  const [listItems, setListItems] = useState(lista);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log('chamou')
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const fetchData = async () => {
    try {
      const data = await getListById(id);
      setListItems(data.lista);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{nome}</Text>
        <View style={styles.flatList}>
          <FlatList
            data={listItems}
            renderItem={({ item }) => (
              <CardItem
                name={item.itemNome}
                qnt={item.itemQuantidade}
                value={f.format(item.itemPreco)}
                selected={item.itemChecado}
                onPress={() => {
                  item.itemChecado = !item.itemChecado;
                  navigation.navigate("List", {
                    id: id,
                    nome: nome,
                    lista: listItems
                  });
                }}
              />
            )}
          />
        </View>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceValue}>Valor total:</Text>
          <Text style={styles.totalPriceValue}>
            {f.format(calculeTotalPrice(listItems))}
          </Text>
        </View>
        <View style={styles.positionButton}>
          <CustomButton
            title={"Adicionar Item"}
            icon={"add"}
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </View>
        <ModalAddItem
          visible={modalVisible}
          setVisible={setModalVisible}
          lista={listItems}
          setLista={setListItems}
        />
      </View>
    </SafeAreaView>
  );
}

let calculeTotalPrice = (item) => {
  let totalPrice = 0;
  if (item !== undefined) {
    item.forEach((element) => {
      if (element.itemChecado === false) {
        totalPrice += element.itemQuantidade * element.itemPreco;
      }
    });
  }
  return totalPrice;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2B7C7D",
    marginBottom: 10,
  },
  flatList: {
    height: "70%",
    width: "90%",
  },
  totalPriceContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: "#F3A91E",
    position: "absolute",
    bottom: 10,
  },
  totalPriceValue: {
    fontSize: 20,
  },
  positionButton: {
    position: "absolute",
    bottom: 90,
  },
});
