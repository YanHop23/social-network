import React from "react";
import k from "./profile.module.css";

const Profile = () => {
    return (
        <div className={k.wrapper}>
            <div className={k.photo}>your photo</div>
            <div className={k.yorInfo}>
            <div className={k.name}>your Name</div>
            <div className="">your info</div>
            <div className="">your info</div>
            <div className="">your info</div>
                

            </div>
        </div>
    );
};
export default Profile;