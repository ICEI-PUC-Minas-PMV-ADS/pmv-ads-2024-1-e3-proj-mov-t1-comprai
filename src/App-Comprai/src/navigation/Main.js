import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import List from '../pages/List';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#f2f2f2' }, // Aplica para todas as telas
    }}>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="List" component={List} options={{ headerBackTitleVisible: false, headerTitle: '', headerShadowVisible: false, headerTintColor: '#000' }} />
    </Stack.Navigator>
  );
}
