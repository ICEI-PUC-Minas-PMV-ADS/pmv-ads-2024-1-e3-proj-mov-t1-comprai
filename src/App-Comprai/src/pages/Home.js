import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { useUser, } from "../contexts/UseContexts";
import CustomButton from "../components/CustomButton";

export default function Home() {
  const { name } = useUser()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.mainText}> Bem Vindo ao App Compraí, {name} </Text>
        <Text style={styles.mainP}> Bora começar a organizar suas compras de supermercados? </Text>
        <Image style={styles.mainLogo} source={require('../../assets/eco-market--leisure-food-eco-market.png')} />
        <Text style={styles.seccH1}>Vamos criar sua lista de compras!</Text>
        <Text style={styles.seccP}>Clique no botão "+" para criar sua lista</Text>     
        <View style={styles.positionButton}>
        <CustomButton
            title={"Nova Lista"}
            icon={"add"}>
            </CustomButton>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B7C7D'
  },
  mainText: {
    fontSize: 26,
    textAlign: 'center',
    color: '#2B7C7D',
    fontWeight: 'bold'
  },
  mainP: {
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
    paddingTop: 11,
    fontWeight: 'bold'
  },
  mainLogo: {
    marginTop: 36,
  },
  seccH1: {
    marginTop: 35,
    fontSize: 16,
    fontWeight: 'bold'
  },
  seccP: {
    marginTop: 7,
    color: '#2B7C7D',
    fontSize: 12,
    fontWeight: 'bold',
  },
  positionButton: {
    paddingTop: 45,
    paddingBottom: 27,
  }
});