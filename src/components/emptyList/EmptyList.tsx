import React from 'react';
import {View, Text} from 'react-native';
import EmptyListStyles from './EmptyListStyles';
import useTheme from '@GoalTrackingApp/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EmptyList = ({text}: {text: string}) => {
  const theme = useTheme();
  const styles = EmptyListStyles(theme);
  const colors = theme.colors;
  const fonts = theme.fonts;

  return (
    <View style={styles.container}>
      <Ionicons name="md-warning-outline" size={150} color={colors.lightText} />
      <Text style={[styles.text, fonts.subHeading]}>{text}</Text>
    </View>
  );
};

export default EmptyList;
