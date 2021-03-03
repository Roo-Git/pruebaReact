import React from 'react'
import Btn from '../Btn/Btn'
import './Header.css'

const Header = () => {

    return(
        <div className="componentHeader">
                <Btn valor="" text="Home"></Btn>
                <Btn valor="login" text="Login"></Btn>
                <Btn valor="profile" text="Profile"></Btn>
        </div>
    );
};

export default Header;