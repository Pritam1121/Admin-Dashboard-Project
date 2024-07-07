import "./Featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const featured =()=>{
    return(
        <>
            <div className="Featured">
                <div className="top">
                    <h1 className="title">Total Renenue</h1>
                    <MoreVertIcon  fontSize="small"/>
                </div>
                <div className="bottom">
                    <div className="featuredChart">
                <CircularProgressbar value={70} text={("70%")} strokeWidth={5} />
                    </div>
                    <p className="title">Total sales made today</p>
                    <p className="amount">$420</p>
                    <p className="desc">Privious transation processing. Last payment may not be included.</p>
                
                <div className="summary">
                        <div className="item">
                           <div className="itemTitle">Target</div>
                           <div className="itemResult negative">
                           <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">
                                    $12.4K
                            </div>
                           </div>
                        </div>
                        <div className="item">
                           <div className="itemTitle">Last Week</div>
                           <div className="itemResult positive">
                           <KeyboardArrowUpIcon fontSize="small"/>
                            <div className="resultAmount">
                                    $12.4K
                            </div>
                           </div>
                        </div>
                        <div className="item">
                           <div className="itemTitle">Last Month</div>
                           <div className="itemResult positive">
                           <KeyboardArrowUpIcon fontSize="small" />
                            <div className="resultAmount">
                                    $12.4K
                            </div>
                           </div>
                        </div>
                     </div>
                </div>
            </div>
        </>
    )
}
export default featured;