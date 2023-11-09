import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Styles';
import AuthForm from './AuthForm';
import ButtonComponents from './ButtonComponents';

const AuthContent = () => {
  return (
    <View style={styles.mainContainer}>
      <AuthForm />
      <ButtonComponents>Login</ButtonComponents>
      <Text>Create new user?</Text>
    </View>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primary800,
    width: '90%',
    padding: '5%',
    borderRadius: 10,
  },
});
