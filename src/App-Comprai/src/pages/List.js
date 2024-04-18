import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function List() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Nome da Lista</Text>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemName}>
              <Text style={styles.itemValue}>
                Caixa de leite
              </Text>
            </View>
            <View style={styles.itemQntPrice}>
              <Text style={styles.itemValue}>
                Qnt: 3
              </Text>
              <Text style={styles.itemValue}>
                R$ 5,69
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemName}>
              <Text style={styles.itemValue}>
                Farinha
              </Text>
            </View>
            <View style={styles.itemQntPrice}>
              <Text style={styles.itemValue}>
                Qnt: 5
              </Text>
              <Text style={styles.itemValue}>
                R$ 3,19
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemName}>
              <Text style={styles.itemValue}>
                Detergente
              </Text>
            </View>
            <View style={styles.itemQntPrice}>
              <Text style={styles.itemValue}>
                Qnt: 2
              </Text>
              <Text style={styles.itemValue}>
                R$ 1,79
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemName}>
              <Text style={styles.itemValue}>
                Caixa de leite
              </Text>
            </View>
            <View style={styles.itemQntPrice}>
              <Text style={styles.itemValue}>
                Qnt: 3
              </Text>
              <Text style={styles.itemValue}>
                R$ 5,69
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemName}>
              <Text style={styles.itemValue}>
                Farinha
              </Text>
            </View>
            <View style={styles.itemQntPrice}>
              <Text style={styles.itemValue}>
                Qnt: 5
              </Text>
              <Text style={styles.itemValue}>
                R$ 3,19
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemName}>
              <Text style={styles.itemValue}>
                Detergente
              </Text>
            </View>
            <View style={styles.itemQntPrice}>
              <Text style={styles.itemValue}>
                Qnt: 2
              </Text>
              <Text style={styles.itemValue}>
                R$ 1,79
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemName}>
              <Text style={styles.itemValue}>
                Caixa de leite
              </Text>
            </View>
            <View style={styles.itemQntPrice}>
              <Text style={styles.itemValue}>
                Qnt: 3
              </Text>
              <Text style={styles.itemValue}>
                R$ 5,69
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemName}>
              <Text style={styles.itemValue}>
                Farinha
              </Text>
            </View>
            <View style={styles.itemQntPrice}>
              <Text style={styles.itemValue}>
                Qnt: 5
              </Text>
              <Text style={styles.itemValue}>
                R$ 3,19
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemName}>
              <Text style={styles.itemValue}>
                Limite de 27 digitos está bom
              </Text>
            </View>
            <View style={styles.itemQntPrice}>
              <Text style={styles.itemValue}>
                Qnt: 100.000
              </Text>
              <Text style={styles.itemValue}>
                R$ 100.000,00
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceValue}>
            Valor total:
          </Text>
          <Text style={styles.totalPriceValue}>
            R$ 12,50
          </Text>
        </View>
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
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B7C7D',
    marginBottom: 5
  },
  scrollView: {
    height: '100%',
    width: '85%'
  },
  itemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#262424'
  },
  itemName: {
    alignItems: 'center',
    marginBottom: 5
  },
  itemQntPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemValue: {    
    fontSize: 20,
    color: 'white'
  },
  totalPriceContainer:{
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: '#F3A91E'
  },
  totalPriceValue:{
    fontSize: 20
  },
  positionButton: {
    position: 'absolute',
    bottom: 100
  }
});
