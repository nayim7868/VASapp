import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
      <Button title="Log In" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
