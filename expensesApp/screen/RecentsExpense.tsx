import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {GlobalStyles} from '../utils/GlobalStyle';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses_context';
import {getDateMinusDays} from '../utils/getFormatDate';
import {FetchFirebase} from '../utils/HttpRequest';

const RecentsExpense = (Expenses: any) => {
  const expenseContx = useContext(ExpensesContext);
  const [recentList, setRecentList] = useState([]);
  const [period, setPeriod] = useState(0);

  const recentsExpense = expenseContx.expenses.filter(expense => {
    const today = new Date();
    const date7Daysago = getDateMinusDays(today, 7);

    return expense?.date > date7Daysago;
  });

  useEffect(() => {
    const getExpense = async () => {
      const expenses = await FetchFirebase();
      console.log(expenses, '--lllljjjka');
    };
    getExpense();
  }, []);

  useEffect(() => {
    setRecentList(Expenses);
    setPeriod(7);
  }, [recentList, period]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary700,
      }}>
      <ExpensesOutput expense={recentsExpense} periodTime={'7 Days'} />
    </View>
  );
};

export default RecentsExpense;

const styles = StyleSheet.create({});
