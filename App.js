/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import * as all from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/router/Mainrouter';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }
}

export default App;
