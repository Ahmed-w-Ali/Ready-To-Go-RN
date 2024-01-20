import React from 'react';
import {SafeAreaView, ScrollView, Switch, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '../../../components/Typography/Typography';
import {useTheme} from '../../../hooks/useTheme';
import {setName} from '../../../store/slice/userSlice';
import {RootState} from '../../../store/store';
import getStyles from './Setting.styles';

const Setting = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {isDark, switchTheme} = useTheme();
  const inset = useSafeAreaInsets();
  const {name} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.container}>
        <View>
          <Typography fontFamily="Montserrat">{name}</Typography>
        </View>
        <View style={styles.title}>
          <Typography fontFamily="Montserrat" weight="bold" size={24}>
            Settings
          </Typography>
          <View style={styles.settingRow}>
            <Typography fontFamily="Montserrat" weight="medium" size={16}>
              Dark Mode
            </Typography>
            <Switch
              value={isDark}
              onChange={() => switchTheme(isDark ? 'light' : 'dark')}
            />
          </View>
          <TouchableOpacity
            onPress={() => dispatch(setName(''))}
            style={styles.settingRow}>
            <Typography fontFamily="Montserrat" weight="medium" size={16}>
              Logout
            </Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Setting;
