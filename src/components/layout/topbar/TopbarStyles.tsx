import {StyleSheet} from 'react-native';
import ITheme from '@GoalTrackingApp/models/theme';

const TopbarStyles = (theme: ITheme) => {
  const colors = theme.colors;

  return StyleSheet.create({
    container: {
      width: '100%',
      height: 56,
      backgroundColor: colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
    },

    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginLeft: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      flex: 1,
      paddingHorizontal: 15,
      color: colors.onPrimary,
    },
  });
};

export default TopbarStyles;
