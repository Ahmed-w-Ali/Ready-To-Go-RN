import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

export default function styles(theme: string) {
  return StyleSheet.create({
    text: {
      color: colors[theme].errorMessage,
    },
  });
}
