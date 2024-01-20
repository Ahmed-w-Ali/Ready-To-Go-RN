import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Typography from '../../../components/Typography/Typography';

const Home = () => {
  return (
    <SafeAreaView>
      <Typography fontFamily="Montserrat" weight="medium" size={16} color="red">
        Hello
      </Typography>
    </SafeAreaView>
  );
};

export default Home;
