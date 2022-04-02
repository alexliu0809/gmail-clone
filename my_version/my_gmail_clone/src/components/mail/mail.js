import { Checkbox } from "@material-ui/core";
import { Label, LabelOutlined, Star, StarBorder } from "@material-ui/icons";
import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useLocalContect, useLocalContext } from "../../context/context";
import { useMailContext } from '../../context/mailcontext'
import { db } from "../../lib/firebase";
import "./styles.css";


import {v4 as uuidv4} from "uuid";
import { useEffect } from "react";



const Mail = ({ data }) => {
  const parentARef = useRef();

  console.log("data", data);

  const [starred, setstarred] = useState(false);
  const [important, setimportant] = useState(false);
  const [refresh, setRefresh] = useState(false);
  
  const [read, setread] = useState(data.read);
  
  const {currentUser} = useLocalContext();

  const [id, setid] = useState("");
  
  //console.log("read initial state", read);
  
  useEffect(() => {
    console.log("useEffect data")
    setread(data.read)
  }, [data,refresh]);

  const updateRead =() => {
    console.log("read before", data.read);
    //setread(!read);
    data.read = !data.read
    setRefresh(!refresh)
    console.log("read after", data.read);
  }

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
    <div className={`mail ${read === false && 'mail--unread'}`}
    onClick={updateRead}
    >
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
        <p className="mail__text">{data.from_name}</p>
        <div className="mail__titleSubtitle">
          <p className="mail__text">{data.subject}</p>
          <p className="mail__text mail__body"> - {data.body}</p>
        </div>
        <p className="mail__text">{data.date}</p>
      </div>

    </div>




  );
};

export default Mail;



