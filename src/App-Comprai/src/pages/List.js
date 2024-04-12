import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function List() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Página Lista</Text>
        <View style={styles.positionButton}>
          <CustomButton title={'Adicionar Item'} icon={'add'} onPress={() => { }} />
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
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B7C7D'
  },
  positionButton: {
    position: 'absolute',
    bottom: 100
  }
});