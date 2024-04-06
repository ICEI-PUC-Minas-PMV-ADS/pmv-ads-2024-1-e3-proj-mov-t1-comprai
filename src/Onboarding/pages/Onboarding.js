import React from 'react';
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

export default function Onboarding() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Tela Onboarding!
      </Text>
      <Button color='#224261' title='Vamos Começar'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    paddingBottom: 30,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
