import React from "react";
import {slide as Menu} from 'react-burger-menu';
import '../css/sidebar.css';

export default function Sidebar(){

    

    return(
        <Menu isOpen={false} width={280} onOpen={handleOnOpen} onClose={handleOnClose} right>
            <a href="/">00 HOME</a>
            <a href="/destination">01 DESTINATION</a>
            <a href="/crew">02 CREW</a>
            <a href="/technology">03 TECHNOLOGY</a>
        </Menu>
    );
}