import React from 'react';
import { Avatar, Input } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import '../css/Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>

                {/* Avatar for logged in user*/}
                <Avatar alt='{user?.displayName}' src='{user?.photoURL}' />

                {/*Time icon */}
                <AccessTimeIcon />

            </div>

            <div className="header__search">

                {/* Search icon */}
                <SearchIcon />

                {/* Input field */}
                <Input placeholder="Search here..."/>
            
            </div>

            <div className="header__right">
                
                {/*Help icon */}
                <HelpOutlineIcon />

            </div>
        </div>
    )
}

export default Header
