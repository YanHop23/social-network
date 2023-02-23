import React from "react";
import k from "./dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id
    return (
        <div className={k.dialogs + " " + k.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
};

const Dialogs = (props) => {
    let DialogsElem = props.dialogsDate.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    return(
        <div className={k.content}>
            {DialogsElem}
        </div>
    );
};
export default Dialogs;