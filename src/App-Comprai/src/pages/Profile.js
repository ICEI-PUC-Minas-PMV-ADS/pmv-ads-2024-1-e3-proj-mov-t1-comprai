import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Appbar} from 'react-native';


 export default function Profile() {
 
  return (
  <>
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.title}>Senha</Text> 
        <Button
        title="Salvar"
        onPress={() => Alert.alert('Simple Button pressed')}/>
      </View> 
     </SafeAreaView>
  </>   
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
});


