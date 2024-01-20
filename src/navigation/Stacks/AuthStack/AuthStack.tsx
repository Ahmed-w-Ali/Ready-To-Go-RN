import {
  StackScreenProps,
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Explore from '../../../screens/AppScreens/Explore/Explore';
import Setting from '../../../screens/AppScreens/Setting/Setting';
import LoginScreen from '../../../screens/AuthScreens/LoginScreen';
import {RootState} from '../../../store/store';
import {RootStackParamList} from '../../../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export type RouteComponent = FC<StackScreenProps<RootStackParamList>>;

const AuthStack = () => {
  const {name} = useSelector((state: RootState) => state.user);

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
        initialRouteName="Login">
        <Stack.Screen
          name="On Boarding"
          component={Explore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign up"
          component={Setting}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
};

export default AuthStack;
