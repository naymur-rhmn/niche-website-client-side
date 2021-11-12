import React, { useEffect, useState } from 'react';
import initAuthentication from '../Login/firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


    // declare auth globally
    const auth = getAuth();
    // provider
    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const googleSignIn = (history, location) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // register using email
    const signUpUsingEmail = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = { email: email, displayName: name };
                setUser(newUser);

                history.replace('/login')
                // save user
                saveUser(email, name, 'POST');
                // update user profile
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                }).catch((error) => {
                    // An error occurred
                });
                logOut();
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    // login using email and password
    const emailSignIn = (email, password, history, location) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // set observer state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {

            }
            setLoading(false);
        })
        return () => unsubscribe;
    }, [user])


    // justify admin or normal user
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])




    // log out user
    const logOut = (history) => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
            history.replace('/')
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false))
    }

    // save user to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return {
        user,
        admin,
        error,
        loading,
        googleSignIn,
        emailSignIn,
        signUpUsingEmail,
        logOut

    }
};

export default useFirebase;