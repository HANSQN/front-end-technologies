import { useState, useEffect } from "react";
import './filterSection.css'

const Filter = (props) => {

    const expensesList = props.expensesList;
    const [selectedYear, setSelectedYear] = useState('');
    const [showSelectYear, setShowSelectYear] = useState(true);

    const changeYearHandler = (event) => {
        const year = event.target.value;
        setSelectedYear(year);
        setShowSelectYear(false); //При виборі року зникає позиція "Select Year"
        props.sortExpenses(year);
    }

    const getYears = () => {
        var presentedYears = [...new Set(expensesList.map(item => item.date.getFullYear()))];
        presentedYears.sort().reverse();
        return presentedYears;
    }

    var years = getYears();

    useEffect(() => {
        //При першому відображенні встановлюємо позицію "Select Year"
        setSelectedYear('');
        setShowSelectYear(true);
    }, []); //Передаємо пустий масив, щоб викликати useEffect тільки раз при монтажі компонента

    return (
        <div className="filter-container">
            <p className="filter-text">Filter by year</p>
            <select className="filter-select" onChange={changeYearHandler} value={selectedYear}>
                {showSelectYear && <option value="">Select Year</option>} {/* Відображається тільки при першому відображенні */}
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter;
