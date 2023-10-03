import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import BudgetList from './components/BudgetList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import Currency from './components/Currency';
import Remainig from './components/Remaining';
import Spend from './components/Spend';
import BudgetAllocate from './components/BudgetAllocate';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'> 
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remainig />
                    </div>
                    <div className='col-sm'>
                        <Spend />
                    </div>
                    <div className='col-sm'>
                        <Currency />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <BudgetList />
                    </div>
                </div>
                
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                   <div className='col-sm'>
                        <BudgetAllocate/>
                    </div>
                </div>
            </div>
           
        </AppProvider>
    );
};
export default App;