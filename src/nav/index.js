import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import BinToTxt from '../screens/BinToTxt';
import TxtToBin from '../screens/TxtToBin';

const Tabs = createBottomTabNavigator();

export default function Nav() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="BinToTxt" component={BinToTxt} />
      <Tabs.Screen name="TxtToBin" component={TxtToBin} />
    </Tabs.Navigator>
  )
}