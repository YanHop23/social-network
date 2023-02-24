import React from "react";
import Dialogs from "./dialogs/Dialogs";
import Dialog from "./dialog/Dialog";
import k from "./message.module.css";



const Message = (props) => {
    return(
        <div className={k.wrapper}>
            <Dialogs dialogsDate={props.dialog.dialogsDate}/>
            <Dialog messageDate={props.dialog.messageDate} addMessage={props.addMessage}/>
        </div>
    );
};

export default Message;
