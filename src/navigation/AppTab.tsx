/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Tab screens
import TasksTab from '@GoalTrackingApp/screens/tasksTab/TasksTab';
import CreateGoalTab from '@GoalTrackingApp/screens/createGoalTab/CreateGoalTab';
import GoalsTab from '@GoalTrackingApp/screens/goalsTab/GoalsTab';

const BottomTab = createBottomTabNavigator();

export default function AppTab() {
  return (
    <BottomTab.Navigator
      initialRouteName="Tasks"
      backBehavior="history"
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
      <BottomTab.Screen
        name="Tasks"
        component={TasksTab}
        options={{
          headerShown: false,
          tabBarLabel: 'Steps',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="tasks" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CreateGoal"
        component={CreateGoalTab}
        options={{
          headerShown: false,
          tabBarLabel: 'Create Goal',
          tabBarIcon: ({color}) => (
            <Ionicons name="add-circle" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Goals"
        component={GoalsTab}
        options={{
          headerShown: false,
          tabBarLabel: 'Goals',
          tabBarIcon: ({color}) => (
            <FontAwesome name="tasks" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
