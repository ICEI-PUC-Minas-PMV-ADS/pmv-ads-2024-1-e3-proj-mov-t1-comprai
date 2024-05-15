import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import Onboarding from './src/pages/Onboarding';
import Login from './src/pages/Login';
import CreateAccount from './src/pages/CreateAccount';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import MyLists from './src/pages/MyLists';
import List from './src/pages/List';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 20,
        height: 60,
        elevation: 3,
        borderTopWidth: 0,
      }
    }}
    >
      <Tab.Screen name='Home' component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='home' size={size} color={'#F3A91E'} />
            } else {
              return <Ionicons name='home-outline' size={size} color={color} />
            }
          }
        }}
      />

      <Tab.Screen name='Minhas Listas' component={MyLists}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='document-text' size={size} color={'#F3A91E'} />
            } else {
              return <Ionicons name='document-text-outline' size={size} color={color} />
            }
          }
        }}
      />

      <Tab.Screen name='Perfil' component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='person' size={size} color={'#F3A91E'} />
            } else {
              return <Ionicons name='person-outline' size={size} color={color} />
            }
          }
        }}
      />
    </Tab.Navigator>
  )
};

export default function App() {

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}