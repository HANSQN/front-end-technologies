import React, { useState, useEffect } from 'react';
import './App.css';
import './Components/Card/card.css'
import './Components/Card/expenses.css'
import Button from './Components/Button/Button.jsx';
import Filter from './Components/Filter/Filter.jsx';
import Diagram from './Components/Diagram/Diagram.jsx';
import Card from './Components/Card/Card.jsx'

function App() {

  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ]);

  const addItem = (name, amount, date) => {
    const newItem = {
      id: Math.random().toString(),
      title: name,
      amount: amount,
      date: new Date(date),
    };
    
    setExpenses([...expenses, newItem]);

    // Перевірка року нового елемента
    if (newItem.date.getFullYear() === selectedYear) {
        // Якщо рік співпадає з вибраним роком, додаємо елемент до відфільтрованого списку
        const updatedFilteredExpenses = [...filteredExpenses, newItem].sort((a, b) => a.date - b.date);
        setFilteredList(updatedFilteredExpenses);
    }
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
      <h2 className='text-format'>My Expenses tempalte</h2>
      <Button handleSubmit={addItem}/>
      <div className="card expenses">
        <Filter sortExpenses={sortItems} expensesList={expenses}/>
        <Diagram expenseItems={filteredExpenses} yearToDisplay={selectedYear}/>
        <Card expenseItems={filteredExpenses}/>
        </div>
    </div>
  );
}

export default App;
