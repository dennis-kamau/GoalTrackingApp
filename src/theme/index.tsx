import React, {createContext, useContext} from 'react';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  DefaultTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {useAppSelector} from '@GoalTrackingApp/redux/hooks';

import ITheme from '@GoalTrackingApp/models/theme';
import LightThemeColors from './LightTheme';
import DarkThemeColors from './DarkTheme';
import Fonts from './Fonts';

const ThemeContext = createContext<ITheme>({
  colors: LightThemeColors,
  font: Fonts,
  theme: {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    roundness: 69,
    colors: {
      ...PaperDarkTheme.colors,
      ...NavigationDarkTheme.colors,
      ...LightThemeColors,
    },
  },
});

interface IProps {
  children?: React.ReactNode;
}

export const ThemeProvider = React.memo<IProps>((props: IProps) => {
  const themeMode = useAppSelector(state => state.theme.mode);

  const MemoizedValue = React.useMemo(() => {
    return {
      colors: themeMode === 'light' ? LightThemeColors : DarkThemeColors,
      font: Fonts,
      theme: (() => {
        const combinedDarkTheme = {
          ...PaperDarkTheme,
          ...NavigationDarkTheme,
          roundness: 69,
          colors: {
            ...PaperDarkTheme.colors,
            ...NavigationDarkTheme.colors,
            ...DarkThemeColors,
          },
        };

        if (themeMode === 'dark') {
          return combinedDarkTheme;
        }

        const combinedDefaultTheme = {
          ...PaperDefaultTheme,
          ...NavigationDefaultTheme,
          roundness: 69,
          colors: {
            ...PaperDefaultTheme.colors,
            ...NavigationDefaultTheme.colors,
            ...LightThemeColors,
          },
        };

        return combinedDefaultTheme;
      })(),
    };
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
});

// Creating a custom context consumer hook for function components
const useTheme = () => useContext(ThemeContext);
export default useTheme;
