//set text
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//sortby amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//sortby date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
//set startdate
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
//set enddate
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})