import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HomePage = () => {

return (

  <View style={styles.container}>
  
  <Text style={styles.mainText}> Bem Vindo ao App Compraí </Text>

  <Text style={styles.mainP}> Bora começar a organizar suas compras de supermercados? </Text>

   </View>


);
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
mainText:{
  fontSize: 26,
  textAlign: 'center',
  paddingTop: 130,
  fontWeight: 700,
  color: '#2B7C7D'
},
mainP:{
  textAlign: 'center',
  paddingTop: 31,
  fontWeight: 700
}
});


export default HomePage;