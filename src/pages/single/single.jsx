import "./single.scss"
import SideBar from "../../component/sidebar/SideBar"
import NavBar from "../../component/navbar/Navbar"
import Charts from "../../component/charts/Charts"
import List from "../../component/table/Table"

const single=()=>{

    return(
        <>
            <div className="sigle">
                <SideBar />
                <div className="singleContainer">
                <NavBar />
                <div className="single-top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <div className="title">
                            Information
                        </div>
                        <div className="item">
                            <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="" className="itemIMG" />
                        <div className="details">
                            <h1 className="itemTitle">Jonn Deo</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>  
                                    <span className="itemValue">Jamesdoe@gmail.com</span>    
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>  
                                    <span className="itemValue">+1 2312 32 45</span>    
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>  
                                    <span className="itemValue">Elton St, 234 Garden Yd, NweYork</span>    
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>  
                                    <span className="itemValue">USA</span>    
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className="right">

                    <Charts aspect={3 / 1}   title="user spending (Last 6 Months)" />
                   

                    </div>
                </div>
                <div className="single-bottom">
                    <h1 className="title">Last Trasaction</h1>
                <List />
                </div>
                </div>
            </div>
        </>
    )
}

export default single;