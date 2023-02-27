/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReactNativePaperProvider} from 'react-native-paper';

import Navigation from './navigation';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ReactNativePaperProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ReactNativePaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
