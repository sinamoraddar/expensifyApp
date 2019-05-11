import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            filters={filters}
        />);
});

test('should render expenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});
//should handle textChange
test('should handle textChange', () => {
    const event = {
        target: {
            value: 'test'
        }
    };
    wrapper.find('input').simulate('change', event);
    expect(setTextFilter).toHaveBeenLastCalledWith(event.target.value);
})
//should sort by date
test('should sort by date', () => {
    const event = {
        target: {
            value: 'date'
        }
    };
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', event);
    expect(sortByDate).toHaveBeenCalled();
})
//should sort by amount
test('should sort by amount', () => {
    const event = {
        target: {
            value: 'amount'
        }
    };
    wrapper.find('select').simulate('change', event);
    expect(sortByAmount).toHaveBeenCalled();
})
//should handle date changes
test('should handle date changes', () => {
    const dates = {
        startDate: altFilters.startDate,
        endDate: altFilters.endDate
    };
    // wrapper.find('DateRangePicker').prop('onDatesChange')(dates);
    // expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate)
    // expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate)
})
//should handle dateFocusChanges
test('should handle datechangefocus', () => {
    const calendarFocused = 'startDate';
    // wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    // expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})