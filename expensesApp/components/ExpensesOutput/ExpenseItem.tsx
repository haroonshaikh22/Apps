import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../utils/GlobalStyle';
import {getFormatDate} from '../../utils/getFormatDate';
import {useNavigation} from '@react-navigation/native';

const ExpenseItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation?.navigate('manageExpense', {editId: item?.id})}
      style={{
        width: '100%',
        backgroundColor: GlobalStyles.colors.primary200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3%',
        borderRadius: 10,
        marginTop: '5%',
        alignSelf: 'center',
      }}>
      <View>
        <Text style={{fontSize: 18, fontWeight: '400', color: '#000000'}}>
          {item?.description}
        </Text>
        <Text>{getFormatDate(item?.date)}</Text>
      </View>
      <View
        style={{backgroundColor: '#FFFFFF', padding: '3%', borderRadius: 5}}>
        <Text style={{fontSize: 18, fontWeight: '400', color: '#000000'}}>
          {item?.amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({});
