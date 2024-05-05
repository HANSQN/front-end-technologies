import React, { useState, useEffect } from 'react';
import './App.css';
import './Components/Card/card.css'
import './Components/Card/expenses.css'
import Button from './Components/Button/Button.jsx';
import Filter from './Components/Filter/Filter.jsx';
import Diagram from './Components/Diagram/Diagram.jsx';
import Card from './Components/Card/Card.jsx';
import Loader from './Components/Loader/Loader.jsx';
import { addExpense, getExpenses } from '../src/Service/Service.jsx';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true); //Додаємо стан для відображення Loader
  
  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true); //Починаємо показувати Loader перед запитом до бази даних
      const expensesData = await getExpenses();
      setExpenses(expensesData);
      setLoading(false); //Приховуємо Loader після завершення запиту до бази даних
    };
    fetchExpenses();
  }, []);

  // Функція для додавання нової витрати
  const addItem = async (name, amount, date) => {
    await addExpense(name, amount, date, setExpenses);
  };

  const [filteredExpenses, setFilteredList] = useState([{}]);
  const [selectedYear, setYear] = useState(new Date().getFullYear());
  const sortItems = (year) => {
    const selectedYear = parseInt(year);
    const filteredList = expenses.filter(item => item.date.getFullYear() === selectedYear);
    setFilteredList(filteredList);
    setYear(year);
  }

  useEffect(() => {
    // Викликаємо sortItems при початковому відображенні компонента
    sortItems(selectedYear);
  }, []); // Передаємо пустий масив, щоб викликати useEffect тільки раз при монтажі компонента

  return (
    <div className="App">
      <h2 className='text-format'>My Expenses template</h2>
      <Button handleSubmit={addItem}/>
      {loading ? (
        <Loader />
      ) : (
        <div className="card expenses">
          <Filter sortExpenses={sortItems} expensesList={expenses}/>
          <Diagram expenseItems={filteredExpenses} yearToDisplay={selectedYear}/>
          <Card expenseItems={filteredExpenses}/>
        </div>
      )}
    </div>
  );
}

export default App;