import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

 const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const[user, setUser]=useState(null)
    const[loading, setLoading]=useState(true)

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const signInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUser=({displayName, photoURL})=>{
        return updateProfile(auth.currentUser,{
            displayName,
            photoURL
        })
    }

    const resetPassword=(email)=>{
        setLoading(true)
    return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
             setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    }, [])

    const authData ={
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        updateUser,
        resetPassword,
        user,
        setUser,
        loading,
        setLoading

    }


    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;