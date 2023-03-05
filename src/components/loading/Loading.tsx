import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import LoadingStyles from './LoadingStyles';
import useTheme from '@GoalTrackingApp/theme';

const Loading: React.FC<{}> = () => {
  const theme = useTheme();
  const colors = theme.colors;
  const styles = LoadingStyles();

  return (
    <View style={styles.container}>
      <ActivityIndicator size={40} color={colors.primary} />
    </View>
  );
};

export default Loading;
