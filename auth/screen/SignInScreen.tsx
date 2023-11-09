import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthContent from '../components/AuthContent';
import {Colors} from '../constants/Styles';

const SignInScreen = () => {
  return (
    <View style={styles.body}>
      <AuthContent />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.primary100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
