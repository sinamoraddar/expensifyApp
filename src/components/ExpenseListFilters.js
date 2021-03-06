import React from "react";
import { connect } from "react-redux";
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = calendarFocused =>
        this.setState(() => ({
            calendarFocused
        }));
    onTextChange = e => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = e => {
        e.target.value === "date"
            ? this.props.sortByDate()
            : this.props.sortByAmount();
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            className="text-input"
                            placeholder="Search Expenses"
                            type="text"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            name="sortByFilter"
                            onChange={this.onSortChange}
                        >
                            <option value="amount">Amount</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId="START_DATE_ID"
                            endDate={this.props.filters.endDate}
                            endDateId="END_DATE_ID"
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    filters: state.filters
});
const mapDispatchToProps = dispatch => ({
    setStartDate: startDate => {
        dispatch(setStartDate(startDate));
    },
    setEndDate: endDate => {
        dispatch(setEndDate(endDate));
    },
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByDate: () => {
        dispatch(sortByDate());
    },
    sortByAmount: () => {
        dispatch(sortByAmount());
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpenseListFilters);
