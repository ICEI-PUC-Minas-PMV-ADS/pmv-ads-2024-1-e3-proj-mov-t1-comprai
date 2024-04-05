import react from 'react';
import { Text, SafeAreaView, StyleSheet, Button, TextInput, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Login
      </Text>

      <View style={styles.loginContainer}>
      <Text>Login</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>senha</Text>
      <TextInput style={styles.input}></TextInput>
      </View>

      <Button
        title={'Fazer Login'}
        color={'blue'}
        onPress={() => {}}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 25,
    padding: 15,
  },
  loginContainer: {
    padding: 18,
    margin: 15,
    marginBottom: 15, 
  }
});
