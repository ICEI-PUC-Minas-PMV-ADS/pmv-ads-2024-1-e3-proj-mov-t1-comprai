import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput, } from 'react-native';
import React, { useState } from 'react';
import { } from 'react-native';
import { Icon } from 'react-native-elements';
import Input from '../components/Input';
import Label from '../components/Label';
import PrimaryButton from '../components/PrimaryButton';

export default function CreateAccount({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const CustomLabel = ({ label, iconName }) => (
    <View style={styles.labelContainer}>
      <Icon name={iconName} size={20} color="black" style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Cadastrar-se</Text>
        </View>

        <Label label="Nome" iconName="person" />
        <Input
          label={<CustomLabel label="Name" iconName="person" />}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
        />
        <Label label="Email" iconName="mail-outline" iconSize={15} />
        <Input
          placeholder="Digite seu E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Label label="Password" iconName="lock-closed-outline" iconSize={15} />
        <Input
          placeholder="Digite sua senha secreta"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <PrimaryButton
          title="Cadastrar"
          onPress={handleSubmit}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signInLink}>Ja possui uma conta ? Logar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontFamily: "Roboto",
    color: "#2B7C7D",
    fontWeight: "bold",
    textAlign: 'left',
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  signInLink: {
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'blue',
  },
});