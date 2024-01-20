import {
  StackScreenProps,
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useTheme} from '../../../hooks/useTheme';
import Explore from '../../../screens/AppScreens/Explore/Explore';
import Home from '../../../screens/AppScreens/Home/Home';
import Notifications from '../../../screens/AppScreens/Notifications/Notifications';
import Setting from '../../../screens/AppScreens/Setting/Setting';
import {RootStackParamList} from '../../../types/navigation';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';

const Stack = createStackNavigator<RootStackParamList>();

export type RouteComponent = FC<StackScreenProps<RootStackParamList>>;

const AppStack = ({routeName}) => {
  const {isDark} = useTheme();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          cardOverlayEnabled: true,
          headerMode: () => null,
          ...Platform.select({
            ios: {
              ...TransitionPresets.ScaleFromCenterAndroid,
            },
            android: {
              ...TransitionPresets.FadeFromBottomAndroid,
            },
          }),
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <BottomNavigation routeName={routeName} />
    </GestureHandlerRootView>
  );
};

export default AppStack;
