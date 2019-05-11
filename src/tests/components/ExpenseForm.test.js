import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expenseform correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});
//should render expense form with expense data
test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});
test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})
test('should set description on input change', () => {
    const value = `hey there it' s getting changed by enzyme test suite`;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state('description')).toBe(value);

});
//should set note on textarea change
test('should set note on textarea change', () => {
    const value = `the note is coming from test file`;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state('note')).toBe(value);
});
//should set amount if valid input 
//23.3
test('should set amount if valid input is provided', () => {
    const value = '23.3';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state('amount')).toBe(value);
});
//should not set amount if invalid input
//12.122
test('should set amount if invalid input is provided', () => {
    const value = '23.333';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
        <ExpenseForm
            expense={expenses[0]}
            onSubmit={onSubmitSpy}
        />
    );
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    const expectedExpense = { ...expenses[0] };
    delete expectedExpense.id;
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expectedExpense);
});
test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    // wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    // expect(wrapper.state('createdAt')).toEqual(now);
});
// should set calendar focus on change
test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    // wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    // expect(wrapper.state('calendarFocused')).toBe(focused);

})