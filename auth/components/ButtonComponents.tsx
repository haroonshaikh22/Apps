import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Styles';

const ButtonComponents = ({children, onPress, style}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        style,
        {
          backgroundColor: Colors.primary500,
          padding: '5%',
          borderRadius: 15,
          width: 200,
          alignSelf: 'center',
          marginVertical: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <Text style={{color: '#FFFFFF'}}>{children}</Text>
    </Pressable>
  );
};

export default ButtonComponents;

const styles = StyleSheet.create({});
