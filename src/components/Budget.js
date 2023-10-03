import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budgets, Currency } = useContext(AppContext);
    const totalBudget = budgets.reduce((total, item) => {
        return total;
    }, 0);
    
    const [budget, setBudget] = useState('');

    return (
        <div className='alert alert-primary'>
            <span>Budget : {Currency}
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{size: 6}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
            </span>
        </div>
    );
};

export default Budget;