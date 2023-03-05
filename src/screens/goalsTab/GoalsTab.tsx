import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import StatusBarPrimary from '@GoalTrackingApp/components/layout/statusbar/primaryStatusbar/StatusBarPrimary';
import Topbar from '@GoalTrackingApp/components/layout/topbar/Topbar';
import GoalsTabStyles from './GoalsTabStyles';
import useTheme from '@GoalTrackingApp/theme';

const GoalsTab: React.FC<{}> = () => {
  const theme = useTheme();
  const styles = GoalsTabStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarPrimary />
      <Topbar title="My Goals" hasGoBackButton={false} />
      <Text>Goals</Text>
    </SafeAreaView>
  );
};

export default GoalsTab;
