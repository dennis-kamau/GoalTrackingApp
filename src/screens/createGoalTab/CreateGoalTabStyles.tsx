import {StyleSheet} from 'react-native';
import ITheme from '@GoalTrackingApp/models/theme';

const CreateGoalTabStyles = (theme: ITheme) => {
  const colors = theme.colors;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },

    formContainer: {
      flex: 1,
      paddingVertical: 15,
      paddingHorizontal: 15,
    },

    submitBtn: {
      marginVertical: 25,
    },

    submitBtnContent: {
      height: 50,
    },
  });
};

export default CreateGoalTabStyles;
