import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Alert, Text, TouchableOpacity } from 'react-native';
import Input from '../components/Input';
import Label from '../components/Label';
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../contexts/UseContexts";
import CustomButton from '../components/CustomButton';
import { update, getUser } from '../services/Auth.services';
import { useIsFocused } from '@react-navigation/native';

const MeuPerfil = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const { id, setSigned } = useUser();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [useIsFocused]);

  const fetchData = async () => {
    try {
      const data = await getUser(id);
      console.log(data)
      setName(data.name)
      setEmail(data.email)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    console.log(name, email, password)
    update(id, {
      name: name,
      email: email,
      password: password
    }).then(res => {
      if (res) {
        Alert.alert('Atenção', 'usuario atualizado com sucesso', [
          { text: "OK" }
        ])

      } else {
        Alert.alert('Atenção', 'usuario NÃO atualizado')
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Meu Perfil</Text>

        <View style={styles.mainInput}>
          <Label label="Nome" iconName="person-outline" />
          <Input
            placeholder="Digite seu nome"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
          />
          <Label label="E-mail" iconName="mail-outline" iconSize={15} />
          <Input
            placeholder="Digite seu E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Label label="Senha" iconName="lock-closed-outline" iconSize={15} />
          <View style={styles.inputPassword}>
            <Input
              placeholder="Digite uma nova senha ou confirme a antiga!"
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
        <View style={styles.buttonContainer}>
          <CustomButton title="Sair" icon={'exit-outline'} onPress={() => { setSigned(false) }} />
          <CustomButton title="Salvar" icon={'save'} onPress={() => { handleSubmit() }} />
        </View>

      </View>
    </SafeAreaView >
  );
};

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
  mainInput: {
    alignItems: "center",
    width: "90%",
  },
  inputPassword: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: 'center',
    gap: 100
  }
});

export default MeuPerfil;
