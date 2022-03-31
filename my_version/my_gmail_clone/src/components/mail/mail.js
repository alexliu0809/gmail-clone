import { Checkbox } from "@material-ui/core";
import { Label, LabelOutlined, Star, StarBorder } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocalContect } from "../../context/context";
import { db } from "../../lib/firebase";
import "./styles.css";

const Mail = ({ data }) => {
  const [starred, setstarred] = useState(false);
  const [important, setimportant] = useState(false);

  return (
    <div className="mail">
      <Checkbox className="mail--colorGray mail--hoverBlack">

      </Checkbox>
      
      {
        starred ? (
          <Star onClick={()=>setstarred(!starred)} className="mail--Yellow">

          </Star>
        ) : (
          <StarBorder className="mail--colorGray mail--hoeverBlack"
          onClick={()=> setstarred(!starred)}
          >
          </StarBorder>
        )
      }

      {important ? (
        <Label
          onClick={() => setimportant(!important)}
          className="mail--Yellow mail__label"
        />
      ) : (
        <LabelOutlined
          onClick={() => setimportant(!important)}
          className="mail--colorGray mail--hoverBlack mail__label"
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