import "./widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widgets=({type})=>{

    let data;

    // tempraory Amount
    const amount =100;
    const diff =20;

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon: <PersonOutlineIcon className="icon" style={{color:"crimson",
                    backgroundColor:"rgba(255,0,0,0.2)"
                }} />
            };
            break;
            case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"View all users",
                icon: <ShoppingCartOutlinedIcon className="icon" 
                 style={{color:"yellow",
                    backgroundColor:"rgba(0,128,0,0.5)" 
                 }}
                />
            };
            break;
            case "earning":
            data={
                title:"EARNING",
                isMoney:true,
                link:"View ne earning",
                icon: <MonetizationOnOutlinedIcon className="icon"
                style={{color:"Magenta  ",
                    backgroundColor:"rgb(255, 255, 100)"
                 }}
                />
            };
            break;
            case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See Details",
                icon: <AccountBalanceOutlinedIcon className="icon" 
                style={{color:"purple",
                    backgroundColor:"rgb(185, 144, 226)" 
                 }}
                 />
            };
            
            break;
            default:
                break;
    }

    return(
        <>  
        
            <div className="widgets">
                <div className="left">
                    <div className="title">{data.title}</div>
                    <div className="counter">{data.isMoney && "$"}{amount}</div>
                    <div className="link">{data.link}</div>
                </div>
                <div className="right">
                    <div className="percentage positive"><KeyboardArrowUpIcon />{diff}</div>
                    {/* <PersonOutlineIcon className="icon" /> */}
                    {data.icon}
                    
                </div>
            </div>
        </>
    )
}

export default Widgets;