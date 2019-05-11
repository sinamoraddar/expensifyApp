import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <ul>
            <Link to={`/edit/${id}`}><li>description: {description}</li></Link>
            <li>amount: {amount}</li>
            <li>created at(milliseconds from 1/1/1970): {createdAt}</li>
        </ul>
    </div>
);

export default ExpenseListItem;