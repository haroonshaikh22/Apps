import axios from 'axios';

const BASE_URL = 'https://uapps-e2918-default-rtdb.firebaseio.com/';

export const StoreFirebase = expenseData => {
  axios.post(`${BASE_URL}expense.json`, expenseData);
};

export const FetchFirebase = async () => {
  const response = await axios.get(`${BASE_URL}expense.json`);

  const expenses = [];
  for (const key in response.data) {
    console.log(key, 'key');

    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      description: response.data[key].description,
      date: new Date(response.data[key].date),
    };
    expenses.push(expenseObj);
  }
  return expenses;
};
