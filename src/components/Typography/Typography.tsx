// Typography.tsx

import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {colors} from '../../theme';
import {getProperSize} from '../../utils/helpers';

interface TTypographyProps extends TextProps {
  children: string;
  color?: string;
  size?: number;
  weight?:
    | 'black'
    | 'bold'
    | 'extraBold'
    | 'extraLight'
    | 'light'
    | 'medium'
    | 'regular'
    | 'semiBold'
    | 'thin';
  fontFamily?: 'Almarai' | 'Montserrat';
  opacity?: number;
}

const Typography: React.FC<TTypographyProps> = ({
  children,
  color,
  size,
  weight,
  fontFamily,
  opacity,
  ...rest
}) => {
  const {theme} = useTheme();

  const fonts = {
    Almarai: {
      bold: 'Almarai-Bold',
      extraBold: 'Almarai-ExtraBold',
      light: 'Almarai-Light',
      regular: 'Almarai-Regular',
    },
    Montserrat: {
      black: 'Montserrat-Black',
      bold: 'Montserrat-Bold',
      extraBold: 'Montserrat-ExtraBold',
      extraLight: 'Montserrat-ExtraLight',
      light: 'Montserrat-Light',
      medium: 'Montserrat-Medium',
      regular: 'Montserrat-Regular',
      semiBold: 'Montserrat-SemiBold',
      thin: 'Montserrat-Thin',
    },
  };

  return (
    <Text
      style={[
        styles.typography,
        {
          color: color ?? colors[theme].text,
          fontSize: getProperSize(size ?? 14),
          fontFamily: fonts?.[fontFamily]?.[weight] || fonts.Montserrat.regular,
          opacity,
        },
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  typography: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});
