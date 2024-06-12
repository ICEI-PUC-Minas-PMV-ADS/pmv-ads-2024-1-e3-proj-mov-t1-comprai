import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import CardItem from "../components/list/CardItem";

const f = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 2,
});

export default function List({ navigation, route }) {
  const [nomeLista, setNomeLista] = useState('Aleatorio1');
  const { listaInicial } = route.params;
  const [lista, setLista] = useState(listaInicial);
  let calculeTotalPrice = (item) => {
    let totalPrice = 0;
    if (item !== undefined) {
      item.forEach((element) => {
        totalPrice += element.itemQuantidade * element.itemPreco;
      });
    }
    return totalPrice;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{nomeLista}</Text>
        <View style={styles.flatList}>
          <FlatList
            data={lista}
            renderItem={({ item }) => (
              <CardItem
                name={item.itemNome}
                qnt={item.itemQuantidade}
                value={f.format(item.itemPreco)}
                selected={item.itemChecado}
                onPress={() => {
                  item.itemChecado = !item.itemChecado
                  navigation.navigate("List", {
                    nome: nome,
                    listaInicial: lista,
                  })
                }}
              />
            )}
          />
        </View>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceValue}>Valor total:</Text>
          <Text style={styles.totalPriceValue}>
            {f.format(calculeTotalPrice(lista))}
          </Text>
        </View>
        <View style={styles.positionButton}>
          <CustomButton
            title={"Adicionar Item"}
            icon={"add"}
            onPress={() => {
              lista.push({
                itemChecado: false,
                itemNome: "Item teste",
                itemPreco: 2.5,
                itemQuantidade: 1,
              });
              setLista(lista);
              navigation.navigate("List", {
                nome: nome,
                listaInicial: lista,
              })
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2B7C7D",
    marginBottom: 10,
  },
  flatList: {
    height: '70%',
    width: "90%"
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
