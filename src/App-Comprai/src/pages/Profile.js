import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';


const MeuPerfil = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


  const CustomLabel = ({ label, iconName }) => (
    <View style={styles.labelContainer}>
      <Icon name={iconName} size={20} color="black" style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Meu Perfil</Text>
      </View>
      <Input
        label={<CustomLabel label="Nome" iconName="person" />}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputBox}
        labelStyle={styles.inputLabel}
      />
      <Input
        label={<CustomLabel label="E-mail" iconName="email"/>}
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputBox}
        labelStyle={styles.inputLabel}
      />
      <Input
        label={<CustomLabel label="Senha" iconName="lock" />}
        placeholder="Insira sua senha"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry 
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputBox}
        labelStyle={styles.inputLabel}
      />
      <Button
        title="Salvar" 
        iconName={"archive"} //não consegui colocar 
        onPress={() => Alert.alert('Alterações salvas')}
        buttonStyle={[styles.saveButton, { backgroundColor: '#224261' }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#2B7C7D', 
    fontFamily: 'Roboto', 
    height: 30, 
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  inputBox: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 0,
    paddingHorizontal: 10,
  },
  saveButton: {
    marginTop: 20,
    height: 55, 
    width: 350, 
    borderRadius: 30, 
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 0,
  },
  icon: {
    marginRight: 0,
  },
  inputLabel: {
    fontSize: 10,
  },
});

export default MeuPerfil;
