import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should show the summary of one item in the list', () => {
    const list = {
        expenseCount: 1,
        expensesTotal: 1002
    }
    const wrapper = shallow(<ExpensesSummary {...list} />);
    expect(wrapper).toMatchSnapshot();

})
test('should show the summary of multiple expenses in the list', () => {
    const list = {
        expenseCount: 10,
        expensesTotal: 15000
    }
    const wrapper = shallow(<ExpensesSummary {...list} />);
    expect(wrapper).toMatchSnapshot();

})