import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import { createContext } from 'react';
import app from '../../Firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';


export const Authcontext = createContext()
const AuthServices = ({ children }) => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState('')
    const [errorsCode, setErrorsCode] = useState('')
    const [presentUser, setPresentUser] = useState('')

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setPresentUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])



    const authInfo = {
        createUser, signIn, loading, setLoading,
        errors, setErrors, errorsCode, setErrorsCode,
        LogOut, presentUser
    }
    return <Authcontext.Provider
        value={authInfo}
    >
        {children}
    </Authcontext.Provider>;
};

export default AuthServices;