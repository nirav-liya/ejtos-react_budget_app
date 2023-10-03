import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import BudgetItem from './BudgetItem';

const BudgetList = () => {
    const { budgets } = useContext(AppContext);

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
              <th scope="col"></th>
            </tr>
          </thead>
            <tbody>
            {budgets.map((budget) => (
                <BudgetItem id={budget.id} key={budget.id} name={budget.name} quantity={budget.quantity} />
            ))}
            </tbody>
        </table>
    );
};

export default BudgetList;