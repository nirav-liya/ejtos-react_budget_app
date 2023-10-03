import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);
    
    const [budget, setBudget] = useState('');

    return (
        <div className='alert alert-primary'>
            <span>Budget : {Location}
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
            </span>
        </div>
    );
};

export default BudgetValue;