import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import CardItem from "../components/list/CardItem";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { criarLista } from "../services/Lists.services";
import Input from "../components/Input";

export default function List({ navigation, route }) {
  const [nomeLista, setNomeLista] = useState('Titulo');
  const { listaInicial } = route.params;
  const [lista, setLista] = useState(listaInicial || []);
  const [idUser, setIdUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newNomeLista, setNewNomeLista] = useState(nomeLista);

  let calculeTotalPrice = (item) => {
    let totalPrice = 0;
    if (item !== undefined) {
      item.forEach((element) => {
        totalPrice += element.itemQuantidade * element.itemPreco;
      });
    }
    return totalPrice;
  }


  const f = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('idUser');
        if (userId) {
          setIdUser(userId);
        } else {
          Alert.alert('Erro', 'Usuário não autenticado.');
        }
      } catch (error) {
        console.error('Erro ao obter idUser:', error);
        Alert.alert('Erro', 'Não foi possível obter o id do usuário.');
      }
    };
    fetchUserId();
  }, []);

  const handleAddItem = () => {
    if (idUser) {
      const newItem = {
        itemChecado: false,
        itemNome: "Novo Item",
        itemPreco: 0,
        itemQuantidade: 1,
      };
      setLista([...lista, newItem]);
      console.log(lista)
    } else {
      Alert.alert('Erro', 'Usuário não autenticado.');
    }
  };

  const handleSubmitLista = async () => {
    try {
      await criarLista(nomeLista, idUser, lista);
      Alert.alert('Sucesso', 'Lista salva com sucesso!');
    } catch {
      Alert.alert('Erro', 'Não foi possível salvar a lista.');
    }
  }

  const handleTextPress = () => {
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    setNomeLista(newNomeLista);
    setIsEditing(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={newNomeLista}
            onChangeText={setNewNomeLista}
            onBlur={handleInputBlur}
            autoFocus
          />
        ) : (
          <TouchableOpacity onPress={handleTextPress}>
            <Text style={styles.title}>{nomeLista}</Text>
          </TouchableOpacity>
        )}
        <View >
          <CustomButton
            title={"Salvar Lista"}
            icon={"save"}
            onPress={handleSubmitLista}
          />
        </View>
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
            onPress={handleAddItem}
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
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#262424',
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
