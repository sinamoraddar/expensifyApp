import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            removeExpense={removeExpense}
            history={history}
            expense={expenses[2]}
        />);
})
//should render editexpensepage
//snapshot
test('should render editExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
})

//should handle editexpense
//spies
test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
})
//should handle removeExpense
//spies
test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
    expect(history.push).toHaveBeenLastCalledWith('/');
})