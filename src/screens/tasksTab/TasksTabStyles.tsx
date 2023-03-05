import {StyleSheet} from 'react-native';
import ITheme from '@GoalTrackingApp/models/theme';

const TasksTabStyles = (theme: ITheme) => {
  const colors = theme.colors;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
  });
};

export default TasksTabStyles;
