import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={'Home'} component={HomeScreen} />
    <Stack.Screen name={'Details'} component={DetailsScreen} />
  </Stack.Navigator>
);
// <Stack.Screen name={'Home'} component={HomeScreen} />
export default MainStack;
