import {StyleSheet} from 'react-native';
import ITheme from '@GoalTrackingApp/models/theme';

const EmptyListStyles = (theme: ITheme) => {
  const colors = theme.colors;

  return StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      color: colors.lightText,
      fontSize: 300,
    },
  });
};

export default EmptyListStyles;
