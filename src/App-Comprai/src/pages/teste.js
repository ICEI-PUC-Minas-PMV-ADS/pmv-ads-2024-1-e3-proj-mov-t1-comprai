import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import PrimaryButton from "../components/PrimaryButton";

export default function Login({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.mainInput}>
          <View style={styles.label}>
            <Ionicons name={"mail-outline"} size={15} />
            <Text style={styles.textLabel}>Seu E-mail</Text>
          </View>

          <TextInput style={styles.input} placeholder="Insira seu e-mail" />

          <View style={styles.label}>
            <Ionicons name={"lock-closed-outline"} size={15} />
            <Text style={styles.textLabel}>Sua Senha</Text>
          </View>

          <View style={styles.inputPassword}>
            <TextInput
              style={styles.input}
              placeholder="Insira sua senha"
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

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.span}>Esqueceu a Senha?</Text>
        </TouchableOpacity>

        <PrimaryButton title={"Entrar"} onPress={() => {}} />

        <View style={styles.linkCreate}>
          <View>
            <Text>NÃ£o possui contar?</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("CreateAccount")}
          >
            <Text style={styles.span}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: "90%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    color: "#2B7C7D",
    marginBottom: 25,
  },
  mainInput: {
    alignItems: "center",
    width: "90%",
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: "100%",
    marginBottom: 25,
  },
  label: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    textAlign: "left",
    fontSize: 12,
    marginLeft: 10,
  },
  textLabel: {
    fontSize: 12,
  },
  span: {
    color: "#2196F3",
    marginBottom: 40,
  },
  linkCreate: {
    flexDirection: "row",
    gap: 5,
    marginTop: 45,
  },
  inputPassword: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
