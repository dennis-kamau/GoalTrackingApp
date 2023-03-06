import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  App: NavigatorScreenParams<AppTabParamList> | undefined;
  CreateTask: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type AppTabParamList = {
  Home: undefined;
  Bookmarks: undefined;
  CreateStory: undefined;
  Notifications: undefined;
  Profile: undefined;
};
