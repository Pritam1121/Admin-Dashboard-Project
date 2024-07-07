import { useState } from "react"
import "./new.scss"
import SideBar from "../../component/sidebar/SideBar"
import NavBar from "../../component/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';


const newpage=({inputs,title})=>{

    const[file,setFile]=useState("");

   
     return(
        <>
            <div className="new">
            <SideBar />  
                <div className="newContiner">
                <NavBar />    
                <div className="topNew">
                     <h1>{title}</h1>
                </div>
                <div className="bottomNew">
                        <div className="left">
                            <img className="img" src={
                                file ? URL.createObjectURL(file):
                                "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" 
                            }                            
                            alt="" />
                        </div>
                        <div className="right">
                            <form>
                                <div className="formInput">
                                        <label htmlFor="file">
                                        Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                        </label>
                                        <input type="file"
                                         id="file"
                                          onChange={(e)=>setFile(e.target.files[0])} 
                                          style={{ display : "none "}} />
                                       </div>

                                       {inputs.map((input) => (
                                        <div className="formInput" key={input.id}>
                                            <label>{input.label}</label>
                                            <input type={input.type} placeholder={input.placeholder} />
                                        </div>
                                       ))}


                                     
                                {/* <div className="formInput">
                                    <label>Name and Surname:</label>
                                    <input type="text" placeholder="join Doe" />
                                </div>
                                <div className="formInput">
                                    <label>Email:</label>
                                    <input type="email" placeholder="join-doe@gmail.com" />
                                </div>
                                <div className="formInput">
                                    <label>Phone:</label>
                                    <input type="text" placeholder="+1 234 567 98" />
                                </div>
                                <div className="formInput">
                                    <label>Password:</label>
                                    <input type="password"  />
                                </div>
                                <div className="formInput">
                                    <label>Address:</label>
                                    <input type="text" placeholder="Elton st. 213 NewYork" />
                                </div>
                                <div className="formInput">
                                    <label>Country:</label>
                                    <input type="text" placeholder="USA" />
                                </div> */}
                                <button>Send</button>
                            </form>
                        </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default newpage;