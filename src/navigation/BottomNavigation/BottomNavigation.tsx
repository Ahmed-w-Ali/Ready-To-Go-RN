import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Explore, Home, Notification} from '../../../assets/icons';
import Setting from '../../../assets/icons/Setting';
import Typography from '../../components/Typography/Typography';
import {useTheme} from '../../hooks/useTheme';
import getStyles from './BottomNavigation.styles';

type TBottomNavigationProps = {
  routeName?: string;
};

const routes = [
  {
    id: 0,
    title: 'Home',
    icon: <Home />,
  },
  {
    id: 1,
    title: 'Explore',
    icon: <Explore />,
  },
  {
    id: 2,
    title: 'Notifications',
    icon: <Notification />,
  },
  {
    id: 3,
    title: 'Setting',
    icon: <Setting />,
  },
];

const BottomNavigation = ({routeName}: TBottomNavigationProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation();

  const onNavigate = (name: string) => {
    if (routeName === name) {
      return;
    }
    navigation.dispatch(StackActions.replace(name));
  };

  return (
    <View style={styles.navigationContainer}>
      {routes.map(({id, title, icon}) => {
        const focused = routeName === title;
        const Icon = React.cloneElement(icon, {color: '#fff'});
        return (
          <TouchableOpacity
            key={id}
            onPress={() => onNavigate(title)}
            style={[
              styles.navigationButton,
              focused ? styles.focusedButton : null,
            ]}>
            {Icon}
            <Typography
              size={14}
              fontFamily="Montserrat"
              weight="semiBold"
              color={'#fff'}>
              {title}
            </Typography>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;
