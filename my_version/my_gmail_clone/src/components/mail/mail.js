import { Checkbox } from "@material-ui/core";
import { Label, LabelOutlined, Star, StarBorder } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocalContect, useLocalContext } from "../../context/context";
import { db } from "../../lib/firebase";
import "./styles.css";

import mails_data from './mail_conf.json';

import {v4 as uuidv4} from "uuid";
import { useEffect } from "react";



const Mail = (data) => {
  const [starred, setstarred] = useState(false);
  const [important, setimportant] = useState(false);

  const {currentUser} = useLocalContext();

  const [id, setid] = useState("");

  const from = data.from;
  const body = data.body;
  const subject = data.subject;
  const date = data.date;


  useEffect(() =>{
    if (id === ""){
      setid(uuidv4());
    }
  },[])

  const createMailId = () => {
    if (id === ""){
      setid(uuidv4());
    }
  }

  const updateMailPreference = (props)=>{
    if (true){
      //return;
    }
    if (id === ""){
      createMailId();
    }

    setstarred(props.starred)
    setimportant(props.important)

    console.log("updateMailPreference")

    db.collection('MailPreference').doc(currentUser.email)
    .collection("Mail").doc(id).
    set({id:id, starred:props.starred, important:props.important})
    .then( () =>{
      console.log("Updated Properly")
    }).catch((err)=>{
      console.log("error", err)
    })
  }
  
  return (
    <div className="mail">
      <Checkbox className="mail--colorGray mail--hoverBlack">

      </Checkbox>
      
      {
        starred ? (
          <Star onClick={()=>{updateMailPreference({starred:!starred, important:important})}} className="mail--Yellow"
          value={starred}
          >

          </Star>
        ) : (
          <StarBorder className="mail--colorGray mail--hoeverBlack"
          onClick={()=>{updateMailPreference({starred:!starred, important:important})}}
          value={starred}
          >
          </StarBorder>
        )
      }

      {important ? (
        <Label
          onClick={() => {updateMailPreference({starred:starred, important:!important})}}
          className="mail--Yellow mail__label"
          value={important}
        />
      ) : (
        <LabelOutlined
          onClick={() => {updateMailPreference({starred:starred, important:!important})}}
          className="mail--colorGray mail--hoverBlack mail__label"
          value={important}
        />
      )}


    <div className="mail__texts">
        {/* //? Sender's name */}
        <p className="mail__text">{from}</p>
        <div className="mail__titleSubtitle">
          <p className="mail__text">{subject}</p>
          <p className="mail__text mail__body"> - {body}</p>
        </div>
        <p className="mail__text">{date}</p>
      </div>

    </div>




  );
};

export default Mail;


export const GenMailsFromConfFile = () =>{
  let mailArray = []
  // console.log("Mails",mails_data);
  for (let i = 0; i < mails_data.length; i++) {
    let mail_data = mails_data[i]
    const one_mail_data_point = Mail(mail_data)
    mailArray.push(one_mail_data_point)
  }
  return (
    <>
    {mailArray}
    </>
  )
}
