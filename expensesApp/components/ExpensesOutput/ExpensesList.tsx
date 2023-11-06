import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../utils/GlobalStyle';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({expenses}) => {
  const RenderItems = ({item}) => {
    return <ExpenseItem item={item} />;
  };
  return (
    <FlatList
      style={{width: '100%'}}
      data={expenses}
      keyExtractor={item => item.id}
      renderItem={item => {
        return <RenderItems item={item?.item} />;
      }}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
