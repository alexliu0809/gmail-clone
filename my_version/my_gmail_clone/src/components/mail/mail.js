import { Checkbox } from "@material-ui/core";
import { Label, LabelOutlined, Star, StarBorder } from "@material-ui/icons";
import React, { useState, useRef, useHistory } from "react";
import { useLocalContect, useLocalContext } from "../../context/context";
import { useMailContext } from '../../context/mailcontext'
import { db } from "../../lib/firebase";
import "./styles.css";


import {v4 as uuidv4} from "uuid";
import { useEffect } from "react";


import { useNavigate } from "react-router-dom";


const Mail = ({ mailState }) => {
  const parentARef = useRef();

  console.log("Incoming mailState for Mail", mailState);

  const [starred, setstarred] = useState(false);
  const [important, setimportant] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [read, setread] = useState(mailState.state.read);
  const {currentUser} = useLocalContext();
  const {mailReadRefresh, setmailReadRefresh} = useMailContext();
  const [id, setid] = useState("");

  const navigate = useNavigate();
  
  //console.log("read initial state", read);
  
  useEffect(() => {
    setread(mailState.state.read)
  }, [mailState,refresh]);

  const updateRead =() => {
    //setread(!read);
    mailState.state.read = !mailState.state.read
    setRefresh(!refresh)
    setmailReadRefresh(!mailReadRefresh)
    console.log("read after", mailState.state.read);

    // redirect to mailState.state.full_id
    navigate(`/${mailState.state.full_id}`)
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
        <p className="mail__text">{mailState.state.from_name}</p>
        <div className="mail__titleSubtitle">
          <p className="mail__text">{mailState.state.subject}</p>
          <p className="mail__text mail__body"> - {mailState.state.body}</p>
        </div>
        <p className="mail__text">{mailState.state.date}</p>
      </div>

    </div>

  );
};

export default Mail;



