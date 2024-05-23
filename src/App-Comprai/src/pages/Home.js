import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function Home() {
  const [items, setItems] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  const addItem = () => {
    if (editItemId !== null) {
      setItems(items.map(item => item.id === editItemId ? { ...item, name: textInput } : item));
      setEditItemId(null);
    } else {
      setItems([...items, { id: Date.now().toString(), name: textInput }]);
    }
    setTextInput('');
  };

  const editItem = (id) => {
    const item = items.find(item => item.id === id);
    setTextInput(item.name);
    setEditItemId(id);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.mainText}> Bem Vindo ao App Compraí </Text>
        <Text style={styles.mainP}> Bora começar a organizar suas compras de supermercados? </Text>
        <Image style={styles.mainLogo} source={require('../../assets/eco-market--leisure-food-eco-market.png')} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar mercados em destaque..."
            value={textInput}
            onChangeText={setTextInput}
          />
          <Button title={editItemId ? "Atualizar" : "Adicionar"} onPress={addItem} />
        </View>

        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <TouchableOpacity onPress={() => editItem(item.id)} style={styles.editButton}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.deleteButton}>
                <Text style={styles.buttonText}>Deletar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B7C7D'
  },
  mainText: {
    marginTop: 100,
    fontSize: 26,
    textAlign: 'center',
    color: '#2B7C7D',
    fontWeight: 'bold'
  },
  mainP: {
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
    paddingTop: 31,
    fontWeight: 'bold'
  },
  mainLogo: {
    marginTop: 46,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%',
  },
  itemText: {
    flex: 1,
  },
  editButton: {
    backgroundColor: '#FFA500',
    padding: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    padding: 5,
  },
  buttonText: {
    color: '#fff',
  }
});