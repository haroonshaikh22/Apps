import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Styles';
import AuthContent from '../components/AuthContent';

const LoginScreen = () => {
  return (
    <View style={styles.body}>
      <AuthContent />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.primary100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
