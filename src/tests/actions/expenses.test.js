import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addExpense,
    removeExpense,
    editExpense,
    startAddExpense,
    setExpenses,
    startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt }
    });
    database.ref('expenses')
        .set(expenseData)
        .then(() => done());
});

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

// test('should set up add expense default action object', () => {
//     const action = addExpense();
//     expect(action).toEqual(
//         {
//             type: 'ADD_EXPENSE',
//             expense: {
//                 description: '',
//                 id: expect.any(String),
//                 note: '',
//                 amount: 0,
//                 createdAt: 0
//             }
//         });
// });

test('should set up add expense action object with provided values', () => {
    // const expenseData = {
    //     description: 'a',
    //     note: 'aa',
    //     amount: 1,
    //     createdAt: 2
    // };
    const action = addExpense(expenses[2]);
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: expenses[2]
        });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'this one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });
            return database.ref(`expenses/${actions[0].expense.id}`)
                .once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const defaultData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...defaultData
                }
            });
            return database.ref(`expenses/${actions[0].expense.id}`)
                .once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(defaultData);
            done();
        })
});

test('should setup setExpenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses())
        .then(() => { 
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
            });
            done();
        })


})