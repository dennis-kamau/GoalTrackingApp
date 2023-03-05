import {StyleSheet} from 'react-native';
import ITheme from '@GoalTrackingApp/models/theme';

const TextFieldStyles = (theme: ITheme) => {
  const colors = theme.colors;

  return StyleSheet.create({
    container: {
      width: '100%',
      marginTop: 10,
    },

    labelText: {
      color: colors.headerText,
      marginBottom: 5,
      fontSize: 12,
      fontWeight: '500',
      textTransform: 'capitalize',
    },

    inputField: {
      width: '100%',
      height: 50,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colors.headerText,
      fontSize: 14,
      color: colors.headerText,
    },

    selectInputText: {
      height: 50,
      width: '105%',
      paddingVertical: 0,
      marginLeft: -10,
      marginTop: -3,
      paddingHorizontal: 30,
    },

    textAreaText: {
      height: 75,
      textAlignVertical: 'top',
      paddingTop: 10,
    },

    codeText: {
      fontSize: 18,
      letterSpacing: 4,
    },

    inputFieldError: {
      borderColor: colors.errorText,
    },

    errorText: {
      marginTop: 5,
      color: colors.errorText,
    },
  });
};

export default TextFieldStyles;
