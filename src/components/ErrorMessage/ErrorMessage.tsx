import React from 'react';
import {useTheme} from '../../hooks/useTheme';
import {colors} from '../../theme';
import Typography from '../Typography/Typography';

type TProps = {
  children: string;
};

const ErrorMessage = ({children}: TProps) => {
  const {theme} = useTheme();
  return <Typography color={colors[theme].errorMessage}>{children}</Typography>;
};

export default ErrorMessage;
