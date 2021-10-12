import { useEffect, useState } from 'react';
import {getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut} from 'firebase/auth'
import FirebaseAuthentication from '../Firebase/firebase.init';
FirebaseAuthentication();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const auth = getAuth();
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
        // .then(result =>{
        //     setUser(result.user)
        // })
    };
    const logout = () =>{
        signOut(auth)
        .then(()=> setUser({}))
        .catch(error=> setError(error.message))
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(user=>{
            if(user){
                setUser(user)
            }
        }));
        return unSubscribe; //etar reason ta ki ?
    },[auth]);

    return {
        user,
        error,
        googleSignIn,
        logout
    }
};

export default useFirebase;