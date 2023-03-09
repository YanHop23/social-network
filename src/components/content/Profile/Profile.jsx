import React from "react";
import k from "./profile.module.css";
import info from "./yourinfo/ava.jpg";

import post1 from "./yourinfo/post1.jpg";
import post2 from "./yourinfo/post2.jpg";
import post3 from "./yourinfo/post3.jpg";


const Profile = () => {
    return (
        <div>
            <div className={k.userinfo}>
                <div className={k.photo}>
                    <img className={k.ava} src={info} alt="" />
                </div>
                <div className={k.yorInfo}>
                    <div className={k.header}>
                        <div className={k.name}>Stepan Giga</div>
                        <div className={k.presence}>online</div>

                    </div>
                    <div className={k.bio}>
                        <div className={k.age}>18</div>
                        <div className={k.location}>Lviv</div>
                        <div className={k.hobbi}>Frontend</div>
                        <div className={k.ocupation}>Student</div>
                    </div>
                    <div className={k.status}>I feel bad</div>
                </div>
            </div>
            <div className={k.posts}>
                <img src={post1} alt="" />
                <img src={post2} alt="" />
                <img src={post3} alt="" />
            </div>
        </div>
        
    );
};
export default Profile;