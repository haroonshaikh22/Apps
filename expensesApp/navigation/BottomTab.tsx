import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {GlobalStyles} from '../utils/GlobalStyle';
import AddIcon from 'react-native-vector-icons/Ionicons';
import RecentsIcon from 'react-native-vector-icons/MaterialIcons';
import ExpenseIcon from 'react-native-vector-icons/Entypo';
import RecentsExpense from '../screen/RecentsExpense';
import AllExpense from '../screen/AllExpense';

const BottomTab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary400},
        headerTintColor: '#FFFFFF',
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: () => (
          <AddIcon
            name="add-circle-outline"
            size={22}
            onPress={() => navigation.navigate('manageExpense')}
          />
        ),
      })}>
      <BottomTab.Screen
        name="All Expense"
        component={AllExpense}
        options={{
          tabBarIcon: () => <ExpenseIcon name="calculator" size={22} />,
        }}
      />
      <BottomTab.Screen
        name="Recents"
        component={RecentsExpense}
        options={{
          tabBarIcon: () => <RecentsIcon name="notes" size={22} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabStack;

const styles = StyleSheet.create({});
