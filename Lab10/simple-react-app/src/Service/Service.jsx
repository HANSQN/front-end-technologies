import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import {db} from '../firebase-config'

//Функція для додавання нової витрати
const addExpense = async (name, amount, date, setExpenses) => {
  try {
    const docRef = await addDoc(collection(db, "expense"), {
      title: name,
      amount: amount,
      date: new Date(date),
    });
    console.log("Expense added with ID: ", docRef.id);

    const expenses = await getExpenses();
    setExpenses(expenses);

  } catch (error) {
    console.error("Error adding expense: ", error);
  }
};

//Функція для зчитування та сортування витрат з Firestore
const getExpenses = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'expense'));
    const expenseData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      title: doc.data().title,
      amount: doc.data().amount,
      date: doc.data().date.toDate(),
    }));

    // Сортуємо витрати за датою перед поверненням
    expenseData.sort((a, b) => a.date - b.date);

    return expenseData;
  } catch (error) {
    console.error('Error getting expenses: ', error);
    return [];
  }
};


//Функція для оновлення витрати
const updateExpense = async (id, newData, setExpenses) => {
  try {
    const expenseRef = doc(db, 'expense', id);
    await updateDoc(expenseRef, newData);
    console.log("Expense updated successfully");

    const updatedExpenses = await getExpenses();
    setExpenses(updatedExpenses);
  } catch (error) {
    console.error("Error updating expense: ", error);
  }
};

//Функція для видалення витрати
const deleteExpense = async (id, setExpenses) => {
  try {
    const expenseRef = doc(db, 'expense', id);
    await deleteDoc(expenseRef);
    console.log("Expense deleted successfully");

    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
  } catch (error) {
    console.error("Error deleting expense: ", error);
  }
};

export { addExpense, getExpenses, updateExpense, deleteExpense };