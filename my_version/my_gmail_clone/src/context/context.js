import { createContext, useContext, useState } from "react";

// shared environment
const UserContext = createContext();

export function useLocalContext(){
    return useContext(UserContext)
};

// accepts an arg: children
export function ContextProvider({ children }){
    const [currentUser, setCurrentUser] = useState('');
    const [appState, setAppState] = useState("login");
    
    const value = {
        currentUser,
        appState,
    };

    return(
        <UserContext.Provider value={value}>
                {children}
        </UserContext.Provider>
    )
}