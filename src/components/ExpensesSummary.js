import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expensesTotal';

export const ExpensesSummary = ({ expenseCount = 0, expensesTotal = 0 }) => {
    const expenseWord = (expenseCount === 1) ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h3>
                Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
            </h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getTotalExpenses(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);