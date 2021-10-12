import React from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthContext = React.createContext();
const AuthProvider = ({children}) => {
    const allReturn = useFirebase()
    return (

            <AuthContext.Provider value={allReturn}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;