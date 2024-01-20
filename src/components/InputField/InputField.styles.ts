import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {getProperSize} from '../../utils/helpers';

export default function styles(theme: string) {
  return StyleSheet.create({
    container: {
      backgroundColor: colors[theme].inputBackground,
      borderRadius: 12,
      paddingHorizontal: 12,
      height: getProperSize(43),
      justifyContent: 'center',
    },
  });
}
