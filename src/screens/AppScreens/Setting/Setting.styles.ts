import {StyleSheet} from 'react-native';
import {colors} from '../../../theme';
import {getProperSize} from '../../../utils/helpers';

export default function styles(theme: string) {
  return StyleSheet.create({
    screen: {flex: 1},
    container: {flex: 1, paddingHorizontal: 20},
    title: {paddingVertical: 12},
    settingRow: {
      marginTop: 24,
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors[theme].settingButton,
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 12,
      minHeight: getProperSize(55),
    },
  });
}
