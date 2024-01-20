import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import Typography from '../Typography/Typography';

type Props = {
  title: string;
  titleSize: number;
  subTitle: string;
  subtitleSize?: number;
  style?: StyleProp<ViewStyle>;
};

const TitleAndSubtitle = ({
  title,
  titleSize,
  subTitle,
  subtitleSize,
  style,
  ...rest
}: Props) => {
  return (
    <View style={style}>
      <Typography
        fontFamily="Montserrat"
        weight="medium"
        size={titleSize}
        {...rest}>
        {title}
      </Typography>
      <Typography
        fontFamily="Montserrat"
        weight="medium"
        size={subtitleSize ? subtitleSize : titleSize / 1.62}
        {...rest}>
        {subTitle}
      </Typography>
    </View>
  );
};

TitleAndSubtitle.defaultProps = {
  title: 'Title',
  subTitle: 'Subtitle',
};

export default TitleAndSubtitle;
