import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spend = () => {
    const { budgets, Currency } = useContext(AppContext);
    const totalBudgetSpent = budgets.reduce((total, item) => {
        return (total += item.quantity);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Currency}{totalBudgetSpent}</span>
        </div>
    );
};

export default Spend;