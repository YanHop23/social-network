import React from "react";
import k from "./dialog.module.css";

const Dialog = () => {
    return(
        <div className={k.content}>
            <div className={k.block}>your dialog</div>
            <div className={k.content__input}>
                <input type="text" name="" id="" />
                <button>Send</button>
            </div>

        </div>
    );
};
export default Dialog;