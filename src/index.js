import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

import Nav from './nav';

export default function App() {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  )
}