/* Change the configuration */

var firebaseConfig = {
  apiKey: 'AIzaSyAzcwgZuLA7dO9g4sQhXQVTUgCo0M8m2qM',
  authDomain: 'grocerylist-91956.firebaseapp.com',
  databaseURL: 'https://grocerylist-91956.firebaseio.com',
  projectId: 'grocerylist-91956',
  storageBucket: 'grocerylist-91956.appspot.com',
  messagingSenderId: '813812426276',
  appId: '1:813812426276:web:93e5897af12892ff78dab1',
  measurementId: 'G-VZ83BTR72T',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form

  /* save the data to database */

  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database and sort the data*/

firebase
  .firestore()
  .collection('hoteldata')
  .orderBy('num', 'desc')
  .limit(4)
  .onSnapshot((querySnapshot) => {
    //console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      console.log(doc.data().num);
      console.log(doc.data().name);
    });
  });
