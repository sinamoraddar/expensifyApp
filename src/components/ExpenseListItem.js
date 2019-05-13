import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <ul>
            <Link to={`/edit/${id}`}><li>description: {description}</li></Link>
            <li>amount: {numeral(amount / 100).format('$0,0.00')}</li>
            <li>created at(milliseconds from 1/1/1970): {moment(createdAt).format('MMMM Do, YYYY')}</li>
        </ul>
    </div>
);

export default ExpenseListItem;