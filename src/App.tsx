/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as ReactNativePaperProvider} from 'react-native-paper';
import {store} from './redux/store';
import useTheme, {ThemeProvider} from './theme';

import Navigation from './navigation';

function ThemedApp(): JSX.Element {
  const {theme} = useTheme();

  return (
    <ReactNativePaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Navigation />
      </NavigationContainer>
    </ReactNativePaperProvider>
  );
}

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <ThemedApp />
        </ThemeProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}

export default App;
