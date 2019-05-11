import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ])
})
test('should not remove expenses by id if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '15'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});
//should add expense
test('should add a new expense to the expenses array', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'gas bill',
            note: 'due date is tomorrow',
            amount: 0,
            createdAt: 20000,
            id: '4'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense])
})

//should edit expense
test('should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'carrot'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('carrot')
})
test('should not edit expense if id does not exist', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '12345',
        updates: {
            description: 'carrot'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})