// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import FormExample from './components/form/form';




// export default function App() {
//   return (
//     <View style={styles.container}>
//       <FormExample/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     padding: 0,
    
//   },
// });
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FormExample from './components/form/form';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FormExample />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
