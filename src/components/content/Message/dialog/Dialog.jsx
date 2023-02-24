import React from "react";
import k from "./dialog.module.css";



const MessageItem = (props) => {
    return (
        <div className={k.messageBlock}>
            {props.name}
        </div>
    );
}

const Dialog = (props) => {

    let NewMessage = React.createRef();
    let sendMessage = () => {
        let message = NewMessage.current.value;
        props.addMessage(message)
    }
    let MessageElem = props.messageDate.map(message=> <MessageItem name={message.message} />);
    return(
        <div className={k.content}>
            <div className={k.block}>
                {MessageElem}
            </div>
            <div className={k.content__input}>
                <input type="text" ref={NewMessage}/>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    );
};
export default Dialog;