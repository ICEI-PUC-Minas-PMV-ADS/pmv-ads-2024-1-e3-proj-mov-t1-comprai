import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput, } from 'react-native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import Input from '../components/Input';
import Label from '../components/Label';
import PrimaryButton from '../components/PrimaryButton';

import { Ionicons } from "@expo/vector-icons";
import { register } from "../services/Auth.services";
export default function CreateAccount({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);

  const handleSubmit = () => {
    register({
      name: name,
      email: email,
      password: password
    }).then(res => {
      console.log(res)

      if (res) {
        Alert.alert('Atenção', 'usuario cadastrado com sucesso', [
          { text: "OK", onPress: () => navigation.goBack() }
        ])

      } else {
        Alert.alert('Atenção', 'usuario NÂO cadastrado')
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Cadastrar-se</Text>

        <View style={styles.mainInput}>
          <Label label="Nome" iconName="person-outline" />
          <Input
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
          <View style={styles.inputPassword}>
            <Input
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={hidePassword}
            />

            <TouchableOpacity
              onPress={() => setHidePassword(!hidePassword)}
              style={{ position: "absolute", right: 20, top: 22 }}
            >
              <Ionicons
                name={hidePassword ? "eye-off-outline" : "eye-outline"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        <PrimaryButton
          title="Cadastrar"
          onPress={handleSubmit}
        />

        <View style={styles.linkLogin}>
          <View>
            <Text>Ja possui uma conta?</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.span}>Fazer Login</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontFamily: "Roboto",
    color: "#2B7C7D",
    fontWeight: "bold",
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  signInLink: {
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'blue',
  },
  span: {
    color: "#2196F3",
    marginBottom: 40,
  },
  linkLogin: {
    flexDirection: "row",
    gap: 5,
    marginTop: 45,
  },
  mainInput: {
    alignItems: "center",
    width: "90%",
  },
  inputPassword: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});