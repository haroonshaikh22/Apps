import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const DataInputBox = ({props: any, placeholder, value, keyboardType}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#FFFFFF',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <TextInput
        style={{backgroundColor: '#FFFFFF', width: '100%', borderRadius: 10}}
        placeholder={placeholder}
        onChange={data => {}}
        keyboardType={keyboardType}
        value={value}
      />
    </View>
  );
};

export default DataInputBox;

const styles = StyleSheet.create({});
