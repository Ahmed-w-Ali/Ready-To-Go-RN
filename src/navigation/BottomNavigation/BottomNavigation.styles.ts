import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {SCREEN_HEIGHT, isIOS} from '../../utils/helpers';

export default function styles(theme: string) {
  return StyleSheet.create({
    navigationContainer: {
      position: 'absolute',
      left: 20,
      right: 20,
      zIndex: 0,
      bottom: isIOS ? 25 : -1,
      backgroundColor: colors[theme].primary,
      height: 0.06 * SCREEN_HEIGHT,
      borderRadius: 100,
      paddingHorizontal: 40,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    navigationButton: {
      alignItems: 'center',
      gap: 4,
      opacity: 0.5,
    },
    focusedButton: {
      opacity: 1,
    },
  });
}
