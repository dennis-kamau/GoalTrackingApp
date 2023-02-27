import {StyleProp, TextStyle} from 'react-native';

export default interface IFont {
  h1: StyleProp<TextStyle>;

  h2: StyleProp<TextStyle>;

  h3: StyleProp<TextStyle>;

  h4: StyleProp<TextStyle>;

  h5: StyleProp<TextStyle>;

  h6: StyleProp<TextStyle>;

  h7: StyleProp<TextStyle>;

  h8: StyleProp<TextStyle>;

  title: StyleProp<TextStyle>;

  heading: StyleProp<TextStyle>;

  subHeading: StyleProp<TextStyle>;

  subTitle1: StyleProp<TextStyle>;

  subTitle2: StyleProp<TextStyle>;

  body: StyleProp<TextStyle>;

  bodyLarge: StyleProp<TextStyle>;

  bodyMedium: StyleProp<TextStyle>;

  bodySmall: StyleProp<TextStyle>;

  caption: StyleProp<TextStyle>;
}
