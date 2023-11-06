import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextInputComponents from '../../components/TextInputComponents';
import {GlobalStyles} from '../../utils/GlobalStyle';
import Button from '../../components/Button';
import {getFormatDate} from '../../utils/getFormatDate';

const ExpenseForm = ({buttonLabel, onSubmit, onCancel, defaultExpense}) => {
  console.log(defaultExpense, '--lll');

  {
    /* State object destucturing to avoid multi state on form
  
 */
  }
  const [inputData, setInputData] = useState({
    description: defaultExpense ? defaultExpense?.description : '',
    amount: defaultExpense ? defaultExpense?.amount.toString() : '',
    date: defaultExpense ? getFormatDate(defaultExpense?.date) : '',
  });

  console.log(inputData, 'lllllkk');

  {
    /* Function with 2 params
  identifier : get key of value, eg : identifier : 'amount'
  enterValue : Data
  ...Text : get prev data of state
  [identifier] : enterValue , get key as second param and update data in a object

*/
  }
  const InputHandler = (identifier, enterValue) => {
    setInputData(text => {
      return {
        ...text,
        [identifier]: enterValue,
      };
    });
  };

  const SubmitHandler = () => {
    const Expensedata = {
      amount: +inputData.amount,
      date: new Date(inputData.date),
      description: inputData.description,
    };

    onSubmit(Expensedata);
  };

  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        marginTop: '20%',
      }}>
      <Text
        style={{
          color: GlobalStyles.colors.white,
          fontSize: 22,
          fontWeight: '700',
        }}>
        ExpenseForm
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
        }}>
        {/* .bind : use to bind current data with (this) notation */}
        <TextInputComponents
          placeholder={'Amount'}
          style={{width: '48%'}}
          value={inputData.amount}
          onChange={InputHandler.bind(this, 'amount')}
        />
        <TextInputComponents
          placeholder={'Date'}
          style={{width: '48%'}}
          value={inputData.date}
          onChange={InputHandler.bind(this, 'date')}
        />
      </View>
      <TextInputComponents
        placeholder={'Description'}
        style={{width: '90%'}}
        value={inputData.description}
        onChange={InputHandler.bind(this, 'description')}
      />

      <View
        style={{
          width: '90%',
          justifyContent: 'center',
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <Button onPress={onCancel}>Cancle</Button>
        <Button
          style={{backgroundColor: GlobalStyles.colors.primary200}}
          onPress={SubmitHandler}>
          {buttonLabel ? 'Update' : 'Add'}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
