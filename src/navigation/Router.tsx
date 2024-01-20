import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import {useTheme} from '../hooks/useTheme';
import {RootState} from '../store/store';
import {navigationRef} from '../utils/helpers';
import AppStack from './Stacks/AppStack/AppStack';
import AuthStack from './Stacks/AuthStack/AuthStack';

export default function Router() {
  const {isDark} = useTheme();
  const [routeName, setRouteName] = useState('Home');

  const {appLoaded} = useSelector((state: RootState) => state.setting);
  const {name} = useSelector((state: RootState) => state.user);

  const isAppStack = name.length;

  const onStateChange = () => {
    const currentRouteName = navigationRef.getCurrentRoute().name;
    setRouteName(currentRouteName);
  };

  const onReady = () => {
    setRouteName(navigationRef.getCurrentRoute()?.name);
  };

  const appStackProps = {
    routeName,
  };

  const lightTheme = {
    colors: {
      text: '#15141F',
      primary: '#7D32E9',
      background: '#ffffff',
    },
    dark: false,
  };

  const darkTheme = {
    colors: {
      text: '#ffffff',
      primary: '#7D32E9',
      background: '#0C0C0C',
    },
    dark: true,
  };

  useEffect(() => {
    if (appLoaded && isAppStack) {
      SplashScreen.hide();
    }
  }, [appLoaded, isAppStack]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={onStateChange}
      onReady={onReady}
      theme={isDark ? darkTheme : lightTheme}>
      {isAppStack ? <AppStack {...appStackProps} /> : <AuthStack />}
    </NavigationContainer>
  );
}
