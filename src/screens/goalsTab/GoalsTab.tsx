import React, {useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import StatusBarPrimary from '@GoalTrackingApp/components/layout/statusbar/primaryStatusbar/StatusBarPrimary';
import Topbar from '@GoalTrackingApp/components/layout/topbar/Topbar';
import EmptyList from '@GoalTrackingApp/components/emptyList/EmptyList';
import GoalsTabStyles from './GoalsTabStyles';
import useTheme from '@GoalTrackingApp/theme';

const GoalsTab: React.FC<{}> = () => {
  const theme = useTheme();
  const styles = GoalsTabStyles(theme);

  const [goals] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarPrimary />
      <Topbar title="My Goals" hasGoBackButton={false} />
      <FlatList
        data={goals}
        ListEmptyComponent={<EmptyList text="No Goals Set" />}
        renderItem={_item => <View />}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
};

export default GoalsTab;
