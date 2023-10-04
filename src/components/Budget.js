import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { dispatch, totalBudget, Currency } = useContext(AppContext);
    const [budget, setBudget] = useState('');
    const changeTotalBudget = (val)=>{
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
                        
                        style={{size: 6}}
                        onChange={(event) => changeTotalBudget(event.target.value)}>
                        </input>
            </span>
        </div>
    );
};

export default Budget;