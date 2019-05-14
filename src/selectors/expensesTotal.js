export default (expenses = []) => {
    const amountsArray = expenses
        .map((expense) => expense.amount);
    const totalAmount = amountsArray
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return totalAmount;
};