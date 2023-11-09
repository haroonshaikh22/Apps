import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/Styles';
import InputComponent from './InputComponent';

const AuthForm = ({isLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassowrd] = useState('');

  const InputHandler = ({inputType, enteredValue}) => {
    console.log(inputType, enteredValue, 'input ffff');
  };
  return (
    <View>
      <InputComponent
        title={'Login'}
        placeholder={'Email'}
        onChange={InputHandler.bind(this, 'email')}
      />
      <InputComponent title={'Password'} placeholder={'Password'} />
      {!isLogin && (
        <InputComponent
          title={'Confirm Password'}
          placeholder={'Confirm Password'}
        />
      )}
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({});
