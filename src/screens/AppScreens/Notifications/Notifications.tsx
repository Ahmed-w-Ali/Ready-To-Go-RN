import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Typography from '../../../components/Typography/Typography';

type Props = {};

const Notifications = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Typography>Notifications</Typography>
    </SafeAreaView>
  );
};

export default Notifications;
