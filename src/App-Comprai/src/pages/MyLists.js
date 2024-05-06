import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import jsonData from "../DB/listas.json";

export default function MyLists({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Minhas Listas</Text>
        <FlatList
          data={jsonData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleListItemPress(item)}>
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.nome}</Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContent}
        />

        <View style={styles.positionButton}>
          <CustomButton
            title={"Nova Lista"}
            icon={"add"}
            onPress={() => {
              navigation.navigate("List");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
  
  // {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.listContainer}>{renderJsonData()}</View>
  //     </View>
  //   );
  // }
}

const handleListItemPress = (item) => {
  console.log("Você clicou em:", item.nome);
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
    fontWeight: "bold",
    color: "#2B7C7D",
  },
  positionButton: {
    position: "absolute",
    bottom: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  listContainer: {
    marginTop: 50,
    width: "80%",
  },
  itemContainer: {
    backgroundColor: "#000000",
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
    padding: 20,
  },
  itemText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});
