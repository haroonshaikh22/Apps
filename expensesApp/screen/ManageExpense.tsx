import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import {GlobalStyles} from '../utils/GlobalStyle';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';
import {ExpensesContext} from '../store/expenses_context';
import ExpenseForm from './managesExpense/ExpenseForm';
import {StoreFirebase} from '../utils/HttpRequest';

const ManageExpense = ({route, navigation}) => {
  const ExpenseContx = useContext(ExpensesContext);
  const expenseId = route?.params?.editId;
  const isEditing = !!route?.params?.editId;

  const SelectedExpense = ExpenseContx.expenses.find(
    expense => expense.id === expenseId,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteHandler = () => {
    ExpenseContx.deleteExpense(expenseId);

    navigation.goBack();
  };
  const confirmHandler = Expensedata => {
    if (isEditing) {
      ExpenseContx.updateExpense(expenseId, Expensedata);
    } else {
      StoreFirebase(Expensedata);
      ExpenseContx.addExpense(Expensedata);
    }
    navigation.goBack();
  };
  const cancleHandler = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,

        alignItems: 'center',
      }}>
      <ExpenseForm
        onCancel={cancleHandler}
        onSubmit={confirmHandler}
        buttonLabel={isEditing}
        defaultExpense={SelectedExpense}
      />

      {isEditing && (
        <View
          style={{
            width: '80%',
            borderTopWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '5%',
            borderColor: '#FFFFFF',
          }}>
          <DeleteIcon
            name="delete"
            size={24}
            color={'#FFFFFF'}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({});
