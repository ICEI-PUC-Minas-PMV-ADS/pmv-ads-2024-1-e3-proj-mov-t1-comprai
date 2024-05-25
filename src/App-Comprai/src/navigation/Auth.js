import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import Onboarding from '../pages/Onboarding';

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        <Stack.Navigator initialRouteName='Onboarding' screenOptions={{
            headerStyle: { backgroundColor: '#f2f2f2' },
        }}>
            <Stack.Screen
                name="Onboarding"
                component={Onboarding} options={{ headerShown: false }} />
            <Stack.Screen
                name="Login"
                component={Login} options={{
                    headerBackTitleVisible: false, headerTitle: '', headerShadowVisible: false, headerTintColor: '#000'
                }}
            />
            <Stack.Screen
                name="CreateAccount"
                component={CreateAccount} options={{
                    headerBackTitleVisible: false, headerTitle: '', headerShadowVisible: false, headerTintColor: '#000'
                }}
            />
        </Stack.Navigator>
    )
}

export default Main;