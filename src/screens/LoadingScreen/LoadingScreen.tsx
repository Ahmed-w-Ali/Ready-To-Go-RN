import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>We are getting things ready ...</Text>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
