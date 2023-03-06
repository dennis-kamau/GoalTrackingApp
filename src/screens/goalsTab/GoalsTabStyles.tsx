import {StyleSheet} from 'react-native';
import ITheme from '@GoalTrackingApp/models/theme';

const GoalsTabStyles = (theme: ITheme) => {
  const colors = theme.colors;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },

    listContainer: {
      flex: 1,
    },
  });
};

export default GoalsTabStyles;
