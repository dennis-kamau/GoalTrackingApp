import IColorTheme from './Color';
import IFont from './Font';
import ICombinedTheme from './Theme';

export default interface ITheme {
  fonts: IFont;
  colors: IColorTheme;
  theme: ICombinedTheme;
}
