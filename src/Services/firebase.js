import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import UserService from './UserService';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBmZAcVma7rtxdN0SRsxNQ2rnoktVJnrgg",

    authDomain: "weightrace-10de4.firebaseapp.com",

    projectId: "weightrace-10de4",

    storageBucket: "weightrace-10de4.appspot.com",

    messagingSenderId: "743125031996",

    appId: "1:743125031996:web:6fd5960c6fb60e6a1d7739",

    measurementId: "G-Y07YDDH2VR"
});

const auth = app.auth();
const db = app.firestore();
// const googleProvider = new firebase.auth.GoogleAuthProvider();

// const signInWithGoogle = async () => {
//     try {
//         const res = await auth.signInWithPopup(googleProvider);
//         const user = res.user;
//         console.log(user);
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };

const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (firstName, lastName, email, password, phone, dob) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await UserService.createUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            dob: dob,
            userUid: user.uid
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordResetEmail = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    auth.signOut();
};

export {
    auth,
    db,
    // signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
};