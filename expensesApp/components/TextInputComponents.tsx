import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../utils/GlobalStyle';

const TextInputComponents = ({
  placeholder,
  keyboardType,
  onChange,
  value,
  maxLength,
  style,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChange}
      value={value}
      maxLength={maxLength}
      placeholderTextColor={'#FFFFFF'}
      style={[
        {
          borderWidth: 1,
          borderColor: '#FFFFFF',
          marginVertical: '3%',
          color: '#FFFFFF',
          backgroundColor: GlobalStyles.colors.primary100,
          borderRadius: 10,
        },
        style,
      ]}
    />
  );
};

export default TextInputComponents;

const styles = StyleSheet.create({});
