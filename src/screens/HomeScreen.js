import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { signOut, user } = useContext(AuthContext);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Welcome {user?.email}</Text>

      <Button title="Request a Ride" onPress={() => navigation.navigate('RideRequest')} />
      <Button title="Log out"        onPress={signOut} />
    </View>
  );
}

