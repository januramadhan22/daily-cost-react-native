import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
