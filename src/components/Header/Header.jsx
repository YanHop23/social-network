import React from "react";
import k from "./header.module.css";

const Header = () => {
    return (
        <div className={k.wrapper}>
            <div className={k.logo}></div>
            <div className={k.name}>Sirenes</div>
        </div>
    );
}
export default Header;