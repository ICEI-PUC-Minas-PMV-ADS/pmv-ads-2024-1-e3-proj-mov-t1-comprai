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
                component={Onboarding}
                options={{
                    header: () => null,
                }} />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{
                    header: () => null,
                }}
            />
        </Stack.Navigator>
    )
}

export default Main;