import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../pages/Onboarding';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import List from '../pages/List';

import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#f2f2f2' }, // Aplica para todas as telas
      }}>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerBackTitleVisible: false, headerTitle: '', headerShadowVisible: false, headerTintColor: '#000'
        }} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={List} options={{ headerBackTitleVisible: false, headerTitle: '', headerShadowVisible: false, headerTintColor: '#000'}} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{
          headerBackTitleVisible: false, headerTitle: '', headerShadowVisible: false, headerTintColor: '#000'
        }} />
      </Stack.Navigator>
  );
}
