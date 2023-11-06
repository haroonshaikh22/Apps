// import {createContext, useReducer} from 'react';

// const DummyData = [
//   {
//     id: 'e1',
//     desc: 'new book',
//     amount: 18.9,
//     date: new Date('22-10-23'),
//   },
//   {
//     id: 'e2',
//     desc: 'new show',
//     amount: 20.92,
//     date: new Date('24-10-23'),
//   },
//   {
//     id: 'e3',
//     desc: 'new tape',
//     amount: 8.9,
//     date: new Date('27-10-23'),
//   },
// ];

// export const ExpensesContext = createContext({
//   expenses: [],
//   addExpense: ({desc, amount, date}) => {},
//   deleteExpense: id => {},
//   updateExpense: (id, {desc, amount, date}) => {},
// });

// const ExpensesReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD':
//       const id = new Date().toString() + Math.random().toString();
//       return [{...action.payload, id}, ...state];
//     case 'DELETE':
//       return state.filter(expense => expense.id !== action.payload);

//     case 'UPDATE':
//       const updateableExpIndex = state.findIndex(
//         expense => expense.id === action.payload.id,
//       );
//       const updatableExp = state[updateableExpIndex];
//       const updatedExp = [...state];
//       const updatedItem = {...updatableExp, ...action.payload.data};
//       updatedExp[updatableExp] = updatedItem;
//       return updatableExp;
//     default:
//       return state;
//   }
// };

// const ExpensesContextProvider = ({children}) => {
//   const [expensesState, dispatch] = useReducer(ExpensesReducer, DummyData);

//   const addExpense = (expenseData: any) => {
//     dispatch({type: 'ADD', payload: expenseData});
//   };

//   const deleteExpense = (id: any) => {
//     dispatch({type: 'DELETE', payload: id});
//   };

//   const updateExpense = (id, expensedata) => {
//     dispatch({type: 'UPDATE', payload: {id: id, data: expensedata}});
//   };

//   const value = {
//     expenses: expensesState,
//     addExpense: addExpense,
//     deleteExpense: deleteExpense,
//     updateExpense: updateExpense,
//   };
//   return (
//     <ExpensesContext.Provider value={value}>
//       {children}
//     </ExpensesContext.Provider>
//   );
// };

// export default ExpensesContextProvider;

import {createContext, useReducer} from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-10-26'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2023-10-27'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2023-10-29'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2023-10-28'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2023-11-01'),
  },
  {
    id: 'e6',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2023-11-02'),
  },
  {
    id: 'e7',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2023-11-03'),
  },
  {
    id: 'e8',
    description: 'A book',
    amount: 14.99,
    date: new Date('2023-11-04'),
  },
  {
    id: 'e9',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2023-11-05'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: id => {},
  updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({type: 'ADD', payload: expenseData});
  }

  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id});
  }

  function updateExpense(id, expenseData) {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
