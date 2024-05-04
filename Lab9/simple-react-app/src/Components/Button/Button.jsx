import { useState } from "react";
import './buttonSection.css'

const Button = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const toggle = () => {
        setIsOpen((isOpen) =>!isOpen);
    }

    const titleHandleChange = (event) => {
        setName(event.target.value);
    }

    const amountHandleChange = (event) => {
        setAmount(event.target.value);
    }

    const dateHandleChange = (event) => {
        setDate(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (date.trim().length === 0 || name.trim().length === 0) {
            /*setError({
                title: 'Invalid input',
                message: 'Please enter a valid date and description (non-empty values).',
            });*/
            return;
        }
        if (isNaN(amount) || +amount < 1) {
            /*setError({
                title: 'Invalid price',
                message: 'Please enter a valid price (> 0).',
            });*/
            return;
        }
        props.handleSubmit(name, amount, date);
    }

    return (
        <div>
            <div className="container" hidden={isOpen}>
                <button className="button" onClick={toggle}>Add New Expense</button>
            </div>
            <div className="container" hidden={!isOpen}>
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="form-element">
                        <label for="fname" className="form-label">Title</label><br />
                        <input 
                            type="text" 
                            id="fname" 
                            className="form-input" 
                            onChange={titleHandleChange}
                            value={name}></input><br />
                    </div>
                    <div className="form-element">
                        <label for="famount" className="form-label">Amount</label><br />
                        <input 
                            type="text" 
                            id="famount" 
                            className="form-input" 
                            onChange={amountHandleChange}
                            value={amount}></input><br />
                    </div>
                    <div className="form-element">
                        <label for="fdate" className="form-label">Date</label><br />
                        <input 
                            type="date" 
                            id="fdate" 
                            className="form-input" 
                            onChange={dateHandleChange}
                            value={date}></input>
                    </div>
                </form>
                <div className="buttons-box">
                    <button className="box-button" onClick={toggle}>Cancel</button>
                    <button type="submit" className="box-button" onClick={handleSubmit}>Add Expense</button>
                </div>
            </div>
        </div>
    );
}

export default Button;