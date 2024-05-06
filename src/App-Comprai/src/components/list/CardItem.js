import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CardItem({ name, qnt, value, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.title}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Qnt: {qnt}</Text>
        <Text style={styles.text}>R$ {value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#262424",
  },
  title: {
    alignItems: "center",
    marginBottom: 5,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    color: "white",
  }
});
