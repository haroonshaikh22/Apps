import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import MainStack from './expensesApp/navigation/MainStack';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <MainStack />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
