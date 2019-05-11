import {
    addExpense,
    removeExpense,
    editExpense
} from '../../actions/expenses';
import uuid from 'uuid';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});
test('should set up edit expense action object', () => {
    const action = editExpense('12345', { note: 'this is from editexpense.test.js' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12345',
        updates: { note: 'this is from editexpense.test.js' }
    });
});
test('should set up add expense default action object', () => {
    const action = addExpense();
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                description: '',
                id: expect.any(String),
                note: '',
                amount: 0,
                createdAt: 0
            }
        });
});
test('should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'a',
        note: 'aa',
        amount: 1,
        createdAt: 2
    };
    const action = addExpense(expenseData);
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        });
});