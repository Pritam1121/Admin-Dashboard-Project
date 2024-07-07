import { useContext }  from "react";
import "./SideBar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DvrIcon from '@mui/icons-material/Dvr';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import { Link } from "react-router-dom";
import {DarkModeContext} from "../../context/darkModeContext"


const SideBar =()=>{

    const {dispatch}= useContext(DarkModeContext);

    return(
        <>
            <div className="sidebar">
                <div className="top">
                    <Link to="/." style={{textDecoration:"none"}}>
                    <span className="logo">Admin</span>
                    </Link>
                    
                </div>
                <hr />
                <div className="center">
               
                    <ul>
                    <p className="title">MAIN</p>
                        <li> <DashboardIcon className="icon" /> <span>Dashboard</span></li>
                     
                        <p className="title">LISTS</p> 


                        <Link to="/users" style={{textDecoration:"none"}}>   
                        <li> <GroupIcon className="icon" /> <span>Users</span></li>
                        </Link>
                        <Link to="/products" style={{textDecoration:"none"}}>   
                        <li> <Inventory2Icon className="icon" /> <span>Products</span></li>
                        </Link>
                        <li> <DvrIcon className="icon" /> <span>Orders</span></li>
                        <li> <LocalShippingOutlinedIcon className="icon" /> <span>Delivery</span></li>

                        <p className="title">USEFULL</p>

                        <li> <AnalyticsIcon className="icon" /> <span>Stats</span></li>
                        <li> <NotificationsOutlinedIcon className="icon" /> <span>Notification</span></li>
                            
                        <p className="title">SERVICE</p>

                        <li> <HealthAndSafetyOutlinedIcon className="icon" /> <span>System Health</span></li>
                        <li> <PsychologyOutlinedIcon className="icon" /> <span>Logs</span></li>
                        <li> <SettingsOutlinedIcon className="icon" /> <span>Settings</span></li>
                        
                        <p className="title">USER</p>

                        <li> <AccountBoxSharpIcon className="icon" /> <span>Profile</span></li>
                        <li> <ExitToAppTwoToneIcon className="icon" /> <span>Logout</span></li>
                    </ul>
                </div>
                <div className="bottom">
                        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                        <div className="colorOption" onClick={()=>dispatch ({type:"DARK"})
                        }></div>


                </div>


            </div>
        </>
    )
}

export default SideBar;