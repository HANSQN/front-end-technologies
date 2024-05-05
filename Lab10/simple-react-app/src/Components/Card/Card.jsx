import React from "react";
import './card.css';
import './expenseDate.css';
import './expenseItem.css';
import './expenses.css';

function Card (props) {
    const filteredExpenses = props.expenseItems;

    return (
        <div>
        {filteredExpenses.map(item => (
            <div key={item.id} className="card expense-item">
                <div className="expense-date">
                    <div className="expense-date__month">{new Date(item.date).toLocaleString('en-US', { month: 'long' })}</div>
                    <div className="expense-date__year">{new Date(item.date).getFullYear()}</div>
                    <div className="expense-date__day">{new Date(item.date).getDate()}</div>
                </div>
                <div className="expense-item__description">
                    <h2>{item.title}</h2>
                    <div className="expense-item__price">${item.amount}</div>
                </div>
            </div>
          ))}
        </div>
    );
}

export default Card;
