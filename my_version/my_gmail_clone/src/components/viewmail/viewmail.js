import { Avatar, Button, Checkbox } from "@material-ui/core";
import { MoreVert, Refresh, ArrowBack } from "@material-ui/icons";
import React from "react";
import { useLocalContext } from "../../context/context";
import "./styles.css";

import { useNavigate } from "react-router-dom";


const ViewMail = ({ mailState }) => {
  const { drawerOpen, currentUser } = useLocalContext();
  const navigate = useNavigate();

  return (
    <div className={`main ${!drawerOpen && "main--fullWidth"}`}>
      <div className="main__controlBtns">
        <ArrowBack onClick={() => {navigate("/")}}/>
        <> </>
        <Checkbox color="secondary" className="main__check" />
        <Refresh />
        <MoreVert />
      </div>

      <div className="viewMail__body">
        <h1 className="viewMail__heading">{mailState.state.subject}</h1>
        <div className="viewMail__senderDetails">
          <Avatar />
          <div className="viewMail__sender">
            <div className="viewMail__senderWrapper">
              <h1 className="viewMail__senderName">{mailState.state.from_name}</h1>
              <p className="viewMail__senderMail">{`<${mailState.state.from}>`}</p>
            </div>
            <p className="viewMail__info">to {
              mailState.state.participant_email === mailState.state.to ? ("me") : (`${mailState.state.to}`)
            }</p>
          </div>
        </div>

        <div className="viewMail__bodyBtm">
          <p className="viewMail__bodyText">{mailState.state.body}</p>
          <Button variant="outlined" className="home__signOut">
            Reply
          </Button>

          <Button variant="outlined" className="home__signOut margin-left">
            Forward
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewMail;