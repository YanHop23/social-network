import React from "react";
import { NavLink } from "react-router-dom";
import k from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={k.wrapper}>
            <ul className={k.menu}>
                <li className={k.menu__link}>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className={k.menu__link}>
                    <NavLink to="/message">Message</NavLink>
                </li>
                <li className={k.menu__link}>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li className={k.menu__link}>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;