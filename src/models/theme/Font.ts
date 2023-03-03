import {StyleProp, TextStyle} from 'react-native';

export default interface IFont {
  title: StyleProp<TextStyle>;

  heading: StyleProp<TextStyle>;

  subHeading: StyleProp<TextStyle>;

  button: StyleProp<TextStyle>;

  bodyLarge: StyleProp<TextStyle>;

  body: StyleProp<TextStyle>;

  bodySmall: StyleProp<TextStyle>;

  caption: StyleProp<TextStyle>;
}
