import { Checkbox } from "@material-ui/core";
import { Label, LabelOutlined, Star, StarBorder } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocalContect, useLocalContext } from "../../context/context";
import { db } from "../../lib/firebase";
import "./styles.css";

import {v4 as uuidv4} from "uuid";
import { useEffect } from "react";

const Mail = ({ data }) => {

  const {currentUser} = useLocalContext();

  const [starred, setstarred] = useState(false);
  const [important, setimportant] = useState(false);

  const [id, setid] = useState("");

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
      return;
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
        <p className="mail__text">Test</p>
        <div className="mail__titleSubtitle">
          <p className="mail__text">Test</p>
          <p className="mail__text mail__body"> - fsdfsdfsdfsdfsfadf</p>
        </div>
        <p className="mail__text">Jan 14</p>
      </div>

    </div>




  );
};

export default Mail;