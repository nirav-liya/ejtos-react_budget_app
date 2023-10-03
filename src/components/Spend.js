import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spend = () => {
    const { expenses, Currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Currency}{totalExpenses}</span>
        </div>
    );
};

export default Spend;