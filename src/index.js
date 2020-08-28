import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Nav from './nav';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor="#efefef"
        barStyle="dark-content"
      />
      <Nav />
    </NavigationContainer>
  )
}