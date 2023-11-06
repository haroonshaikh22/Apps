import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ManageExpense from '../screen/ManageExpense';
import BottomTabStack from './BottomTab';
import {GlobalStyles} from '../utils/GlobalStyle';
import ExpensesContextProvider from '../store/expenses_context';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary400},
            headerTintColor: '#FFFFFF',
          }}>
          <Stack.Screen
            name="BottomTab"
            component={BottomTabStack}
            options={{
              header: () => {
                false;
              },
            }}
          />
          <Stack.Screen
            name="manageExpense"
            component={ManageExpense}
            options={{presentation: 'modal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
