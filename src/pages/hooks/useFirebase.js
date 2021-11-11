import React, { useEffect, useState } from 'react';
import initAuthentication from '../Login/firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);


    // declare auth globally
    const auth = getAuth();
    // provider
    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const googleSignIn = (history, location) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // register using email
    const signUpUsingEmail = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user
                saveUser(email, name);
                // update user profile
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
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

    // log out user
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false))
    }

    // save user to database
    const saveUser = (email, displayName) => {

    }

    return {
        user,
        error,
        loading,
        googleSignIn,
        emailSignIn,
        signUpUsingEmail,
        logOut

    }
};

export default useFirebase;