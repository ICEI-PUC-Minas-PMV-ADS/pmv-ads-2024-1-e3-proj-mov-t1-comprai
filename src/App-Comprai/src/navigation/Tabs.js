import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyLists from "../pages/MyLists";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 20,
          height: 60,
          elevation: 3,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={"#F3A91E"} />;
            } else {
              return <Ionicons name="home-outline" size={size} color={color} />;
            }
          },
        }}
      />

      <Tab.Screen
        name="Minhas Listas"
        component={MyLists}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons name="document-text" size={size} color={"#F3A91E"} />
              );
            } else {
              return (
                <Ionicons
                  name="document-text-outline"
                  size={size}
                  color={color}
                />
              );
            }
          },
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={"#F3A91E"} />;
            } else {
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
