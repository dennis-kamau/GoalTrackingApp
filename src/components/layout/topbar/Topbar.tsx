import React, {useCallback} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TopbarStyles from './TopbarStyles';
import useTheme from '@GoalTrackingApp/theme';
import MatericalIcons from 'react-native-vector-icons/MaterialIcons';

const Topbar = ({
  title,
  hasGoBackButton,
}: {
  title: string;
  hasGoBackButton: boolean;
}) => {
  const theme = useTheme();
  const styles = TopbarStyles(theme);
  const colors = theme.colors;
  const fonts = theme.fonts;

  const navigation = useNavigation();

  const goToPreviousScreen = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }
    navigation.navigate('App');
  }, [navigation]);

  return (
    <View style={styles.container}>
      {hasGoBackButton && (
        <TouchableHighlight
          onPress={() => goToPreviousScreen()}
          underlayColor={colors.opacity}
          style={styles.backButton}>
          <MatericalIcons
            name="chevron-left"
            size={25}
            color={colors.onPrimary}
          />
        </TouchableHighlight>
      )}
      <Text style={[styles.title, fonts.title]} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

export default Topbar;
