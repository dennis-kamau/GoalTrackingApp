import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import StatusBarPrimary from '@GoalTrackingApp/components/layout/statusbar/primaryStatusbar/StatusBarPrimary';
import Topbar from '@GoalTrackingApp/components/layout/topbar/Topbar';
import TasksTabStyles from './TasksTabStyles';
import useTheme from '@GoalTrackingApp/theme';

const TasksTab: React.FC<{}> = () => {
  const theme = useTheme();
  const styles = TasksTabStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarPrimary />
      <Topbar title="My Steps" hasGoBackButton={false} />
      <Text>Steps</Text>
    </SafeAreaView>
  );
};

export default TasksTab;
