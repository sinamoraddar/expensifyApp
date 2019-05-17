import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref().set({
//     name: 'Sina Moraddar',
//     age: 20,
//     stressLevel: 6,
//     job: {
//         title: "Software developer",
//         company: 'Facebook'
//     },
//     location: {
//         city: 'Tehran',
//         country: 'Iran'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('this was failed', e)
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => { console.log('remove operation was completed successfully') })
//     .catch((e) => { console.log(`wasn't able to remove ...somthing went wrong`) });

// database.ref('isSingle')
//     .set(null)
//     .then(() => { console.log('remove operation was completed successfully') })
//     .catch((e) => { console.log(`wasn't able to remove ...somthing went wrong`) });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error while fetching data', e)
//     });

// const onValueChange = database.ref()
//     .on(
//         'value',
//         (snapshot) => {
//             const val = snapshot.val();
//             console.log(val)
//         },
//         (e) => { console.log('Error while fetching data', e); }
//     );

// setTimeout(() => {
//     database.ref().update({
//         stressLevel: 9,
//     });
// }, 3000);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 6000);

// setTimeout(() => {
//     database.ref().update({
//         stressLevel: 3,
//     });
// }, 9000);

//sina is a software developer at digi kala
// database
//     .ref()
//     .on('value',
//         (snapshot) => {
//             const { name, job } = snapshot.val();
//             console.log(`${name} is a ${job.title} at ${job.company}`)
//         }
//     );

// change data and make sure it reprints
// setTimeout(() => {
//     database
//         .ref()
//         .update({
//             name: 'Gholam',
//             job: {
//                 title: 'Chiken eater',
//                 company: 'home'
//             }
//         });

// const firebaseNotes = {
//     notes: {
//         alskdfjk: {
//             body: 'this is my note',
//             title: 'First note'
//         },
//         aksdfwerq: {
//             body: 'Another note',
//             title: 'this is the second note'
//         }
//     }
// }

// const notes = [
//     {
//         id: '12',
//         body: 'this is my note',
//         title: 'First note'
//     },
//     {
//         id: '761ase',
//         body: 'Another note',
//         title: 'this is the second note'
//     }
// ];

// database.ref('note').set(notes);
// database.ref('note/2');

// database.ref('notes').push({
//     title:'TODO',
//     body:'Go for a run'
// });

// database
//     .ref('notes/-LezXn4XFuWTtBdqPJXu')
//     .remove();

// const expenses = [
//     {
//         description: 'first one',
//         note: '',
//         amount: 12,
//         createdAt: 0
//     },
//     {
//         description: 'second one',
//         note: '',
//         amount: 12,
//         createdAt: 0
//     },
//     {
//         description: 'third one',
//         note: '',
//         amount: 12,
//         createdAt: 0
//     }
// ]

// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push(
//                 {
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 }
//             );
//         })
//         console.log(expenses)
//     });

// database.ref('expenses')
//     .on('value',
//     (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push(
//                 {
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 }
//             );
//         })
//         console.log(expenses)
//     }
//     )

// database.ref('expenses')
//     .on('child_removed',
//         (snapshot) => {
//             console.log(snapshot.key,snapshot.val())
//         }
//     );

// database.ref('expenses')
//     .on('child_changed',
//         (snapshot) => {
//             console.log(snapshot.key,snapshot.val())
//         }
//     );

// database.ref('expenses')
//     .on('child_added',
//         (snapshot) => {
//             console.log(snapshot.key,snapshot.val())
//         }
//     );
