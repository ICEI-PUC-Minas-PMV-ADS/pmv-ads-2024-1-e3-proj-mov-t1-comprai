import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <Text style={styles.mainText}> Bem Vindo ao App Compraí </Text>
      <Text style={styles.mainP}> Bora começar a organizar suas compras de supermercados? </Text>
      <Image style={styles.mainLogo} source={require('../../assets/eco-market--leisure-food-eco-market.png')}/>

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
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B7C7D'
  },
  mainText:{
    fontSize: 26,
    textAlign: 'center',
    color: '#2B7C7D',
    fontWeight: 'bold'
  },
  mainP:{
    textAlign: 'center',
    paddingTop: 31,
    fontWeight: 'bold'
  },
  mainLogo:{
    marginTop: 46,
  }
});