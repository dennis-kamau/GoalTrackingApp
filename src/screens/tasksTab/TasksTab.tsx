import React, {useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import StatusBarPrimary from '@GoalTrackingApp/components/layout/statusbar/primaryStatusbar/StatusBarPrimary';
import Topbar from '@GoalTrackingApp/components/layout/topbar/Topbar';
import EmptyList from '@GoalTrackingApp/components/emptyList/EmptyList';
import TasksTabStyles from './TasksTabStyles';
import useTheme from '@GoalTrackingApp/theme';

const TasksTab: React.FC<{}> = () => {
  const theme = useTheme();
  const styles = TasksTabStyles(theme);

  const [tasks] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarPrimary />
      <Topbar title="My Steps" hasGoBackButton={false} />
      <FlatList
        data={tasks}
        ListEmptyComponent={<EmptyList text="No Pending Tasks" />}
        renderItem={_item => <View />}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
};

export default TasksTab;
