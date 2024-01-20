import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, SafeAreaView, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import InputField from '../../components/InputField/InputField';
import TitleAndSubtitle from '../../components/TitleAndSubtitle/TitleAndSubtitle';
import {setName} from '../../store/slice/userSlice';

const formSchema = yup.object().shape({
  name: yup.string().required('name is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at 6 character long'),
});

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = data => {
    dispatch(setName(data.name));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
        <TitleAndSubtitle
          style={{marginVertical: 20}}
          titleSize={24}
          title="Welcome back !"
          subTitle="Login to your account"
        />

        <View style={{gap: 12, marginTop: 24}}>
          <InputField
            name="name"
            title="Name"
            control={control}
            placeholder="Enter your name"
            errors={errors}
          />
          <InputField
            isPassword
            name="password"
            control={control}
            title="Password"
            placeholder="Enter your password"
            errors={errors}
          />
          <Button title="Login" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
