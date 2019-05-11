import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { addExpense } from '../actions/expenses';

// const date = new Date();

// const now = moment();
// console.log(now.format("Do MMM YYYY"))

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }))
        }

    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }))
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        const { description, amount, note, createdAt } = this.state;
        const { onSubmit } = this.props;
        if (!description || !amount) {
            this.setState(() => ({
                error: 'please provide description or amount'
            }))
        } else {
            this.setState(() => ({
                error: ''
            }))
            onSubmit({
                description,
                amount: parseFloat(amount) * 100,
                note,
                createdAt: createdAt.valueOf()
            })
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitForm}>
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input
                        type="text"
                        name="amount"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        name="note"
                        placeholder="Add a note for your expense here (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
};
export default ExpenseForm;

//  {/* note desc createdAt amount */}
//  <form onSubmit={(e) => {
//     e.preventDefault();
//     dispatch(addExpense({
//         description: e.target.description.value,
//         amount: e.target.amount.value,
//         note: e.target.note.value,
//         createdAt: e.target.createdAt.value
//     }))
// }}>
//     <input placeholder="description" type="text" name="description" />
//     <input placeholder="amount" type="number" name="amount" />
//     <input placeholder="note" type="text" name="note" />
//     <input placeholder="created at" type="number" name="createdAt" />
//     <button>Create</button>
// </form>