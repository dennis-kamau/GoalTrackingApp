import {Theme as IReactNavigationTheme} from '@react-navigation/native';
import {MD3Theme as IReactNativePaperTheme} from 'react-native-paper';
import IColor from './Color';

interface ICombinedTheme
  extends Omit<IReactNavigationTheme, 'colors'>,
    Omit<IReactNativePaperTheme, 'colors'> {
  colors: IColor;
}

export default ICombinedTheme;
