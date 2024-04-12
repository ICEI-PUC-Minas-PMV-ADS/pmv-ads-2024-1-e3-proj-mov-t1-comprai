import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PrimaryButton from '../components/PrimaryButton';

export default function Login({ navigation }) {

  const [hidePassword, setHidePassword] = useState(true);

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Página Login</Text>
        <PrimaryButton title={'Entrar'} onPress={() => { navigation.navigate('Home') }} />

        <View style={styles.linkCreate}>
          <View>
            <Text>Não possui contar?</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
            <Text style={styles.span}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
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
    marginBottom: 25
  },
  textLabel: {
    fontSize: 12,
  },
  span: {
    color: '#2196F3',
    marginBottom: 40
  },
  linkCreate: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 45
  },
});