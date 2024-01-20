import {createNavigationContainerRef} from '@react-navigation/native';
import {Dimensions, Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const navigationRef = createNavigationContainerRef();

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const getProperSize = (value: number) => {
  return RFValue(value, SCREEN_HEIGHT);
};

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

export {
  navigationRef,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  isAndroid,
  isIOS,
  getProperSize,
};
