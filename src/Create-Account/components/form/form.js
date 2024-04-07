import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

const FormExample = () => {
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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cadastrar-se</Text>
      </View>
      <Input
        label={<CustomLabel label="Name" iconName="person" />}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputBox}
        labelStyle={styles.inputLabel}
      />
      <Input
        label={<CustomLabel label="Email" iconName="email" />}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputBox}
        labelStyle={styles.inputLabel}
      />
      <Input
        label={<CustomLabel label="Password" iconName="lock" />}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputBox}
        labelStyle={styles.inputLabel}
      />
      <Button
        title="Cadastrar "
        onPress={handleSubmit}
        buttonStyle={[styles.submitButton, { backgroundColor: '#224261' }]} // Added background color
      />
      <TouchableOpacity onPress={() => console.log('Redirect to Sign In')}>
        <Text style={styles.signInLink}>Ja possui uma conta ? Logar</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#2B7C7D', // Title color
    fontFamily: 'Roboto', // Font family
    height: 30, // Title height
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%', // Ensure inputs match the size of the form
  },
  inputBox: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    marginTop: 20,
    height: 52, // Added height
    width: 350, // Added width
    borderRadius: 10, // Added border radius
  },
  signInLink: {
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'blue',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
  },
  icon: {
    marginRight: 0,
  },
  inputLabel: {
    fontSize: 10,
  },
});

export default FormExample;
