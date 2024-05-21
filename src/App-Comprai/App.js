import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import UserProvider from './src/contexts/UseContexts';
import Route from './src/navigation/Route';

export default function App() {

  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
}