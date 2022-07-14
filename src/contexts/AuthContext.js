import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '~/firebase';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const signUserOut = () => {
        return signOut(auth);
    };
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setIsLoading(false);
        });
        return unsub;
    }, []);

    const value = {
        currentUser,
        signup,
        updateProfile,
        signUserOut,
        login,
    };
    return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>;
};
