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


// const MailComp2 = ({ props }) => {
//   console.log("MailComp2 props", props)

//   const  {participant_id,
//     participant_email,
//     from,
//     from_name,
//     mailfrom,
//     to,
//     body,
//     subject,
//     props_read,
//     category,
//     date,
//     props_starred,
//     props_important
//   } = props

//   // const [participant_id, setparticipant_id] = useState(props.participant_id)
//   // const [participant_email, setparticipant_email] = useState(props.participant_email)
//   // const [from, setfrom] = useState(props.from)
//   // const [from_name, setfrom_name] = useState(props.from_name)
//   // const [mailfrom, setmailfrom] = useState(props.mailfrom)
//   // const [to, setto] = useState(props.to)
//   // const [body, setbody] = useState(props.body)
//   // const [subject, setsubject] = useState(props.subject)
//   // const [read, setread] = useState(props.read)
//   // const [category, setcategory] = useState(props.category)
//   // const [date, setdate] = useState(props.date)
//   const [read, setread] = useState(false)
//   const [starred, setstarred] = useState(false)
//   const [important, setimportant] = useState(false)

//   useEffect(() => {
//     setstarred(props_starred);
//   }, [props_starred]);

//   useEffect(() => {
//     setimportant(props_important);
//   }, [props_important]);

//   useEffect(() => {
//     setread(read);
//   }, [props_read]);


//   const updateRead = () => {
//     setread({ read: !read });
//   }

//   const updateMailPreference = (props)=>{
//     setstarred(props.starred);
//     setimportant(props.important);
//     console.log("updateMailPreference")
//     }

//   return (
//     <div className={`mail ${read === false && 'mail--unread'}`}
//     onClick={updateRead}
//     >
//       <Checkbox className="mail--colorGray mail--hoverBlack">

//       </Checkbox>
      
//       {
//         starred ? (
//           <Star onClick={()=>{updateMailPreference({starred:!starred, important:important})}} className="mail--Yellow"
//           value={starred}
//           >

//           </Star>
//         ) : (
//           <StarBorder className="mail--colorGray mail--hoeverBlack"
//           onClick={()=>{updateMailPreference({starred:!starred, important:important})}}
//           value={starred}
//           >
//           </StarBorder>
//         )
//       }

//       {important ? (
//         <Label
//           onClick={() => {updateMailPreference({starred:starred, important:!important})}}
//           className="mail--Yellow mail__label"
//           value={important}
//         />
//       ) : (
//         <LabelOutlined
//           onClick={() => {updateMailPreference({starred:starred, important:!important})}}
//           className="mail--colorGray mail--hoverBlack mail__label"
//           value={important}
//         />
//       )}


//       <div className="mail__texts">
//         {/* //? Sender's name */}
//         <p className="mail__text">{from_name}</p>
//         <div className="mail__titleSubtitle">
//           <p className="mail__text">{subject}</p>
//           <p className="mail__text mail__body"> - {body}</p>
//         </div>
//         <p className="mail__text">{date}</p>
//       </div>

//     </div>
  
//     );
// }

// export default MailComp2;

class MailComp extends React.forwardRef {

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
            starred: false,
            important: false,
        }
    }

    updateRead = () => {
      this.setState({ read: !this.state.read });
    }

    updateMailPreference = (props)=>{
        this.setState({ starred: props.starred });
        this.setState({ important: props.important });
        console.log("updateMailPreference")
      }
  
    render() {
  
        return (
          <div className={`mail ${this.state.read === false && 'mail--unread'}`}
          onClick={this.updateRead}
          >
            <Checkbox className="mail--colorGray mail--hoverBlack">
      
            </Checkbox>
            
            {
              this.state.starred ? (
                <Star onClick={()=>{this.updateMailPreference({starred:!this.state.starred, important:this.state.important})}} className="mail--Yellow"
                value={this.state.starred}
                >
      
                </Star>
              ) : (
                <StarBorder className="mail--colorGray mail--hoeverBlack"
                onClick={()=>{this.updateMailPreference({starred:!this.state.starred, important:this.state.important})}}
                value={this.state.starred}
                >
                </StarBorder>
              )
            }
      
            {this.state.important ? (
              <Label
                onClick={() => {this.updateMailPreference({starred:this.state.starred, important:!this.state.important})}}
                className="mail--Yellow mail__label"
                value={this.state.important}
              />
            ) : (
              <LabelOutlined
                onClick={() => {this.updateMailPreference({starred:this.state.starred, important:!this.state.important})}}
                className="mail--colorGray mail--hoverBlack mail__label"
                value={this.state.important}
              />
            )}
      
      
            <div className="mail__texts">
              {/* //? Sender's name */}
              <p className="mail__text">{this.state.from_name}</p>
              <div className="mail__titleSubtitle">
                <p className="mail__text">{this.state.subject}</p>
                <p className="mail__text mail__body"> - {this.state.body}</p>
              </div>
              <p className="mail__text">{this.state.date}</p>
            </div>
      
          </div>
        
          );

    }
  
  }



export default MailComp