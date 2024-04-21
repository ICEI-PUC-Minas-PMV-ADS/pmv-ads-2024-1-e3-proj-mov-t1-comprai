import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>

      <Text style={styles.returnIcon}>
        Teste
      </Text>

      <Text style={styles.headerTitle}>
        Meu Perfil
      </Text>

    </View>
  );
};


const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 50,
    backgroundColor: 'red',
    alignItems: "center",
    flexGrow: 1
  },
  headerTitle: {
    fontSize: 22,
    backgroundColor: 'green'
  },
  returnIcon: {
    flexGrow: 0
  }
});


export {
  HeaderComponent
}