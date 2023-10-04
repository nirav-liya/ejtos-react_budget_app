import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { dispatch, totalBudget, Currency,budgets } = useContext(AppContext);
    const [budget, setBudget] = useState('');
    const changeTotalBudget = (val)=>{
        const totalBudgetSpend = budgets.reduce((total, item) => {
            return (total += item.quantity);
        }, 0);
        
        if (parseInt(val)>20000)
        {
            alert('Budget Value can not exceed 20,000');
            return;
        }

        if (parseInt(val)<totalBudgetSpend)
        {
            alert('You can not reduce the budget value lower then spending');
            return;
        }
        dispatch({
            type: 'CHG_TOTALBUDGET',
            payload: val,
        })
}

    return (
        <div className='alert alert-primary'>
            <span>Budget : {Currency}
            <input
                        required='required'
                        type='number'
                        id='budget'
                        step='10'
                        value={totalBudget}
                        style={{size: 6}}
                        onChange={(event) => changeTotalBudget(event.target.value)}>
                        </input>
            </span>
        </div>
    );
};

export default Budget;