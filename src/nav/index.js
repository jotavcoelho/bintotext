import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BinToTxt from '../screens/BinToTxt';
import TxtToBin from '../screens/TxtToBin';

const Tabs = createBottomTabNavigator();

export default function Nav() {
  return (
    <Tabs.Navigator
      initialRouteName="BinToTxt"
      tabBarOptions={{
        activeTintColor: '#222222',
        labelStyle: {
          fontSize: 12,
        }
      }}
    >
      <Tabs.Screen 
        name="BinToTxt" 
        component={BinToTxt} 
        options={{
          tabBarLabel: 'Binary to Text',
          tabBarIcon: ({ color }) => (
            <Icon name="numeric-10" size={30} color={color} />
          )
        }}
      />
      <Tabs.Screen 
        name="TxtToBin" 
        component={TxtToBin} 
        options={{
          tabBarLabel: 'Text to Binary',
          tabBarIcon: ({ color }) => (
            <Icon name="text" size={30} color={color} />
          )
        }}
      />
    </Tabs.Navigator>
  );
}