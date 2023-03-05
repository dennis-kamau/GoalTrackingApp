import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import useTheme from '@GoalTrackingApp/theme';
import styles from '../styles/StatusBarStyles';

const StatusBarPrimary = () => {
  const isFocused = useIsFocused();
  const theme = useTheme();

  return (
    <View style={[styles.statusBar, {backgroundColor: theme.colors.primary}]}>
      <SafeAreaView>
        {isFocused && (
          <StatusBar
            translucent
            backgroundColor={theme.colors.primary}
            barStyle="light-content"
            hidden={false}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default StatusBarPrimary;
