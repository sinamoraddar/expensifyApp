//Object destrucuring
// const person = {
//     name: 'sina',
//     age: 19,
//     location: {
//         city: 'shahriar',
//         temp: 28
//     }
// }
// const { name: firstName = 'Anonyomous', age } = person;
// const { city, temp: temperature } = person.location;
// console.log(`${name} is ${age} .`);
// if (temperature && city) {
//     console.log(`it's ${temperature} in ${city}`);
// }
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'ryan holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);
//Array destructuring
// const address = ['1299 s juniper street'
//     , 'philadelphia',
//     'pensilvania',
//     '19147'
// ];
// const [, city, state = 'Tehran'] = address;
// console.log(`you are in ${city} ${state} .`);
const item = [
    'coffee',
    '$2',
    '$2.50',
    '$2.75'
];
const [drink, , mediumPrice='$3'] = item;
console.log(
    `a medium ${drink} (hot) costs ${mediumPrice}`
);