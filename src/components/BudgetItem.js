import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle,FaPlusCircle,FaMinusCircle} from 'react-icons/fa';

const BudgetItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.quantity}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleDeleteItem}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaMinusCircle></td>
        <td><FaTimesCircle size='1.2em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default BudgetItem;