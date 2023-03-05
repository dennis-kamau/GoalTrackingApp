import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import useTheme from '@GoalTrackingApp/theme';
import styles from '../styles/StatusBarStyles';
import {useAppSelector} from '@GoalTrackingApp/redux/hooks';

const StatusBarSecondary = () => {
  const isFocused = useIsFocused();

  const theme = useTheme();
  const themeMode = useAppSelector(state => state.theme.mode);

  return (
    <View
      style={[styles.statusBar, {backgroundColor: theme.colors.background}]}>
      <SafeAreaView>
        {isFocused && (
          <StatusBar
            translucent
            backgroundColor={theme.colors.background}
            barStyle={themeMode === 'dark' ? 'light-content' : 'dark-content'}
            hidden={false}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default StatusBarSecondary;
