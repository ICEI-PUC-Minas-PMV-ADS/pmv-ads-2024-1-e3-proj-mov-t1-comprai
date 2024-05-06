import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomButton from "../components/CustomButton";
import CardItem from "../components/list/CardItem";

export default function List() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Nome da Lista</Text>
        <ScrollView style={styles.scrollView}>
          <CardItem name="Caixa de leite" qnt="3" value="5,69" />
          <CardItem name="Farinha" qnt="5" value="3,19" />
          <CardItem name="Detergente" qnt="2" value="1,79" />
          <CardItem name="Caixa de leite" qnt="3" value="5,69" />
          <CardItem name="Farinha" qnt="5" value="3,19" />
          <CardItem name="Detergente" qnt="2" value="1,79" />
          <CardItem name="Caixa de leite" qnt="3" value="5,69" />
          <CardItem name="Farinha" qnt="5" value="3,19" />
          <CardItem name="Limite de 27 digitos está bom" qnt="100.000" value="100.000,00" />
        </ScrollView>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceValue}>Valor total:</Text>
          <Text style={styles.totalPriceValue}>R$ 12,50</Text>
        </View>
        <View style={styles.positionButton}>
          <CustomButton
            title={"Adicionar Item"}
            icon={"add"}
            onPress={() => {}}
          />
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
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2B7C7D",
    marginBottom: 5,
  },
  scrollView: {
    height: "100%",
    width: "85%",
  },
  totalPriceContainer: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: "#F3A91E",
  },
  totalPriceValue: {
    fontSize: 20,
  },
  positionButton: {
    position: "absolute",
    bottom: 100,
  },
});
