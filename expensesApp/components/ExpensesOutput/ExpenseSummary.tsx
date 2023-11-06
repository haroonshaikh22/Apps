import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../utils/GlobalStyle';

const ExpenseSummary = ({expenses, periodTime}) => {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.totalText}>{periodTime ? periodTime : 'Total'}</Text>
      <Text>Rs. {expenseSum}</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '3%',
    padding: '3%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
  },
  totalText: {
    color: GlobalStyles.colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
});
