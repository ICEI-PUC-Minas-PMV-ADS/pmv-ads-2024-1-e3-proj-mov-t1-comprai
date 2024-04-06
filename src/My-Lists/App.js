import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [records, setRecords] = useState([
    { id: '1', title: 'Registro 1' },
    { id: '2', title: 'Registro 2' },
    { id: '3', title: 'Registro 3' },
  ]);

  const handleGoBack = () => {
    console.log('Voltar');
  };

  const handleRecordPress = (record) => {
    console.log('Registro clicado:', record.title);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Listas</Text>
      
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={records}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.recordItem}
            onPress={() => handleRecordPress(item)}
          >
            <Text style={styles.recordText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
  },
  backButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 30,
  },
  recordItem: {
    padding: 15,
    backgroundColor: '#000000',
    borderRadius: 5,
    marginBottom: 10,
  },
  recordText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

export default App;