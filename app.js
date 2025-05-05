import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/navigation'; // 👈 make sure this path is correct

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  );
}


