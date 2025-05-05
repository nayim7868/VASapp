import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen       from '../screens/HomeScreen';
import LoginScreen      from '../screens/LoginScreen';
import RegisterScreen   from '../screens/RegisterScreen';
import RideRequestScreen from '../screens/RideRequestScreen';

import AuthProvider from '../context/AuthContext';   // ⬅️ context

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <AuthProvider>                           {/* 1️⃣ wrap all */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}   // hide headers for now
        >
          <Stack.Screen name="Home"        component={HomeScreen} />
          <Stack.Screen name="Login"       component={LoginScreen} />
          <Stack.Screen name="Register"    component={RegisterScreen} />
          <Stack.Screen name="RideRequest" component={RideRequestScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}


