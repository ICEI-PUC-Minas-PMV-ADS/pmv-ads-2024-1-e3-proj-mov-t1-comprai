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
import Input from "../components/Input";

import PrimaryButton from "../components/PrimaryButton";
import Label from "../components/Label";
export default function Login({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.mainInput}>
          <Label label="Seu E-mail" iconName="mail-outline" iconSize={15} />
          <Input label="Email" placeholder="Digite seu email" />

          <Label label="Senha" iconName="lock-closed-outline" iconSize={15} />
          <View style={styles.inputPassword}>
            <Input placeholder="Digite a sua senha" secureTextEntry={hidePassword} />

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
          title={"Entrar"}
          onPress={() => {
            navigation.navigate("Tabs");
          }}
        />

        <View style={styles.linkCreate}>
          <View>
            <Text>Não possui conta?</Text>
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
  inputPassword: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
});
