import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {GlobalStyles} from '../utils/GlobalStyle';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses_context';

const AllExpense = () => {
  const ExpensesContx = useContext(ExpensesContext);
  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary700,
      }}>
      <ExpensesOutput expense={ExpensesContx.expenses} />
    </View>
  );
};

export default AllExpense;

const styles = StyleSheet.create({});
