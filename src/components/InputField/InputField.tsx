import React, {useState} from 'react';
import {
  Control,
  FieldErrors,
  FieldValues,
  useController,
} from 'react-hook-form';
import {TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useTheme} from '../../hooks/useTheme';
import {colors} from '../../theme';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Typography from '../Typography/Typography';
import getStyles from './InputField.styles';

type Props = {
  name: string;
  control: Control<any>;
  title: string;
  input?: TextInputProps;
  titleProps?: TextInputProps;
  errors: FieldErrors<FieldValues>;
  isPassword?: boolean;
  placeholder?: string;
};

const InputField = ({
  name,
  control,
  title,
  input,
  titleProps,
  errors,
  placeholder,
  isPassword,
}: Props) => {
  const [show, setShow] = useState(false);

  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {
    field: {onChange, ref, value},
  } = useController({control, name, defaultValue: ''});

  const passwordType = isPassword ? !show : undefined;

  return (
    <>
      <Typography fontFamily="Montserrat" weight="medium" {...titleProps}>
        {title}
      </Typography>
      <View style={styles.container}>
        <TextInput
          ref={ref}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={passwordType}
          placeholderTextColor={colors[theme].placeholderTextColor}
          {...input}
        />
      </View>
      {errors?.[name]?.message && (
        <ErrorMessage>{errors?.[name]?.message}</ErrorMessage>
      )}
    </>
  );
};

export default InputField;
