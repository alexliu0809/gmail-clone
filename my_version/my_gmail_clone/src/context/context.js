import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { auth } from "../lib/firebase"
// shared environment
const UserContext = createContext();

export function useLocalContext(){
    return useContext(UserContext)
};

// accepts an arg: children
export function ContextProvider({ children }){
    const [currentUser, setCurrentUser] = useState('');
    const [appState, setAppState] = useState("login");
    
    useEffect(() => {
        // some logic is executed whenever val in [] is changed
        // if [] empty, runs once
        
        auth.onAuthStateChanged((user) => {
            if (user){
                setAppState("loading")
                setCurrentUser(user)
            } else{
                setCurrentUser(null)
                setAppState("login")
            }
            //console.log("currentUser",currentUser)
        })
    },[]);

    const value = {
        currentUser,
        appState,
        setAppState,
    };

    return(
        <UserContext.Provider value={value}>
                {children}
        </UserContext.Provider>
    )
}