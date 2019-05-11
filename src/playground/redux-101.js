import { createStore } from 'redux';
//Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})
const resetCount = () => ({
    type: 'RESET'
})
//Reducers
//1. reducers are pure function
//2. never change state or action
let result;
const add = (a,b) => {
    result= a + b;
}
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'SET':
            if (typeof action.count !== "undefined") {
                return { count: action.count };
            }
            else {
                return state;
            }
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
};
const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(
//     {
//         type: 'INCREMENT',
//         incrementBy: 5
//     }
// );
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 110 }));
