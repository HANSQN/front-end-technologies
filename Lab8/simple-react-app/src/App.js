import React from 'react';
import './App.css';

const ExpenseDate = ({ month, year, day }) => {
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <Card>
      <div className="expense-item">
        <ExpenseDate month={date.month} year={date.year} day={date.day} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{`$${amount}`}</div>
        </div>
      </div>
    </Card>
  );
};

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

const App = () => {
  const expenses = [
    { date: { month: 'August', year: 2020, day: 14 }, title: 'Toilet Paper', amount: 94.12 },
    { date: { month: 'March', year: 2021, day: 12 }, title: 'New TV', amount: 799.49 },
    { date: { month: 'March', year: 2021, day: 28 }, title: 'Car Insurance', amount: 294.67 },
    { date: { month: 'June', year: 2021, day: 12 }, title: 'New Desk (Wooden)', amount: 450 },
  ];

  return (
    <div className="App">
      <h2>My Expenses Template</h2>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
