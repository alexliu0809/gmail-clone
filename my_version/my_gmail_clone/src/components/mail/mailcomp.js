import { Checkbox } from "@material-ui/core";
import { Label, LabelOutlined, Star, StarBorder } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocalContect, useLocalContext } from "../../context/context";
import { useMailContext } from '../../context/mailcontext'
import { db } from "../../lib/firebase";
import "./styles.css";
import React from 'react'

import {v4 as uuidv4} from "uuid";
import { useEffect } from "react";

class MailState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            participant_id: props.participant_id,
            participant_email: props.participant_email,
            from: props.from,
            from_name: props.from_name,
            mailfrom: props.mailfrom,
            to: props.to,
            body: props.body,
            subject:props.subject,
            read: props.read,
            category:props.category,
            date:props.date,
            id:props.id,
            starred: false,
            important: false,
            full_id: `mail-${props.participant_id}-${props.id}`
        }
    }
}



export default MailState