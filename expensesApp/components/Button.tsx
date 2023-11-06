import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Children} from 'react';
import {GlobalStyles} from '../utils/GlobalStyle';

const Button = ({children, onPress, mode, style}) => {
  console.log(children);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: GlobalStyles.colors.gray500,
          width: '40%',
          padding: '4%',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        },
        style,
      ]}>
      <Text style={{color: '#FFFFFF'}}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
