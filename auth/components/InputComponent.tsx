import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/Styles';

const InputComponent = ({
  title,
  placeholder,
  onChange,
  keyboardType,
  styles,
  value,
}) => {
  const [error, setError] = useState(false);
  return (
    <View>
      <Text style={{color: Colors.white}}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        keyboardType={keyboardType ? keyboardType : 'default'}
        style={[
          styles,
          {
            backgroundColor: 'white',
            borderRadius: 10,
            marginVertical: 5,
            borderWidth: 1,
          },
        ]}
        placeholderTextColor={'#000000'}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({});
