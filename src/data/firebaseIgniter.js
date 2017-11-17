import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyAh1gYggcCqHrTe5aJaJQ7RPXlb4oJ0B8I",
    authDomain: "meteoro-2bccb.firebaseapp.com",
    databaseURL: "https://meteoro-2bccb.firebaseio.com",
    projectId: "meteoro-2bccb",
    storageBucket: "meteoro-2bccb.appspot.com",
    messagingSenderId: "1052623226381"
})

const Database = firebase.database()
export { Database }