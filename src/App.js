/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routes';

function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
