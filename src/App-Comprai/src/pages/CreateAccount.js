import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function CreateAccount({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Página criar uma nova conta</Text>
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
});