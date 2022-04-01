import { createContext, useContext, useState } from "react";
import { useLocalContect, useLocalContext } from "./context";
import { useEffect } from "react";

import { db } from "../lib/firebase";


const MailContext = createContext()

export function useMailContext(){
    return useContext(MailContext);
}


export function MailContextProvider({children}){
    const [receiveMails,setreceiveMails] = useState([])
    const [onScreenMails,setonscreenMails] = useState([])

    const {currentUser} = useLocalContext();
    /*
    An initial call using the callback you provide creates a document 
    snapshot immediately with the current contents of the single document.
    Then, each time the contents change, 
    another call updates the document snapshot.
    */ 
    useEffect (() => {
        db.collection("MailPreference")
        .doc(currentUser.email)
        .collection("Mail").onSnapshot((snapshot) => {
           console.log(snapshot.docs)
        })
    },[currentUser.email])
    
    const value={}
    return (
        <MailContext.Provider value={value}>
            {children}
        </MailContext.Provider>
    )
}