import React from "react";
import "./Navbar.scss";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import {DarkModeContext} from "../../context/darkModeContext"
import { useContext } from "react";


const NavBar =()=>{

    const {dispatch} = useContext(DarkModeContext);


    return(
        <>
            <div className="navbar">
                <div className="wrapper">
                   <div className="search">
                        <input type="" placeholder ="search..." />
                        <SearchTwoToneIcon className="icon" />
                   </div>
                   <div className="items">
                        <div className="item">
                            <LanguageIcon className="icon" /> 
                            English
                        </div>
                        <div className="item">
                            <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGEL"})} />                             
                        </div>

                        <div className="item">
                            <WidgetsOutlinedIcon className="icon"  />                             
                        </div>

                        <div className="item">
                            <NotificationsActiveOutlinedIcon className="icon" />                             
                            <div className="counter">1</div>
                        </div>

                        <div className="item">
                            <ChatBubbleOutlineOutlinedIcon className="icon" />                             
                            <div className="counter">2</div>
                        </div>

                        <div className="item">
                            <ListAltOutlinedIcon className="icon" />                             
                        </div>

                        <div className="item">
                           <img src="images/profile.png" alt="Loading..." className="avatar" />                          
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;