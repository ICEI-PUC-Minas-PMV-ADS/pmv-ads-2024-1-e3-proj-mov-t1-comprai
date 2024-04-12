import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

export default function Onboarding({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.img} source={require('../../assets/onboarding-illustration.png')} />
        <Text style={styles.title}>Simplifique, Organize Suas <Text style={styles.titleSpan}>Compras</Text></Text>
        <Text style={styles.text}>Assuma o controle das suas tarefas e organize suas compras.</Text>
        <PrimaryButton title={'Vamos Começar'} onPress={() => navigation.navigate('Login')} />
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 290,
    height: 290,
    marginBottom: 83
  },
  title:{
    width: '90%',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  titleSpan: {
    color: '#224261',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    width: '75%',
    marginBottom: 70
  }
});