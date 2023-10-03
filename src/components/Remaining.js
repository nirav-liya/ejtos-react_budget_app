import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { budgets, Currency } = useContext(AppContext);
    const totalBudgetRemaining = budgets.reduce((total, item) => {
        return (total -= item.quantity);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Remaining: {Currency}{totalBudgetRemaining}</span>
        </div>
    );
};

export default Remaining;