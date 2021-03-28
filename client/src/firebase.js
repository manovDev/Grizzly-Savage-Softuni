import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDLi14uFMYDoVa9WXSRZIRsCAK2BlLXH3o",
    authDomain: "grizzly-savage.firebaseapp.com",
    projectId: "grizzly-savage",
    storageBucket: "grizzly-savage.appspot.com",
    messagingSenderId: "1071159612884",
    appId: "1:1071159612884:web:1faa81a339a69815f27241"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
    }
}

export default firebase;