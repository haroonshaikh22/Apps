import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpensesList from './ExpensesList';

const ExpensesOutput = ({expense, periodTime}) => {
  console.log(periodTime);

  return (
    <View
      style={{
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ExpenseSummary expenses={expense} periodTime={periodTime} />
      <ExpensesList expenses={expense} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
