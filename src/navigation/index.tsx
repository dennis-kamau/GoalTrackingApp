import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppTab from './AppTab';
import CreateTaskScreen from '@GoalTrackingApp/screens/createTaskScreen/CreateTaskScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="App" component={AppTab} />
      <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
    </Stack.Navigator>
  );
}
