import React from "react";
import Dialogs from "./dialogs/Dialogs";
import Dialog from "./dialog/Dialog";
import k from "./message.module.css";



const Message = (props) => {
    return(
        <div className={k.wrapper}>
            <Dialogs dialogsDate={props.dialogsDate}/>
            <Dialog />
        </div>
    );
};

export default Message;
