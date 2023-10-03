import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle,FaPlusCircle,FaMinusCircle} from 'react-icons/fa';

const BudgetItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name
        };

        dispatch({
            type: 'DELETE_BUDGET',
            payload: item,
        });
    };

    const handleIncreaseBudget = () => {
        const item = {
            name: props.name,
            quantity: 10
        };

        dispatch({
            type: 'ADD_BUDGET',
            payload: item,
        });
    };
    const handleDecreaseBudget = () => {
        const item = {
            name: props.name,
            quantity: 10
        };

        dispatch({
            type: 'RED_BUDGET',
            payload: item,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.quantity}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncreaseBudget}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDecreaseBudget}></FaMinusCircle></td>
        <td><FaTimesCircle size='1.2em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default BudgetItem;