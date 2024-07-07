import "./home.scss"
import Sidebar from "../../component/sidebar/SideBar"
import Navbar from "../../component/navbar/Navbar"
import Widgets from "../../component/widgets/widgets"
import Featured from "../../component/featured/Featured"
import Charts from "../../component/charts/Charts"
import Table from "../../component/table/Table"

const home=()=>{
    return(
        <>
            <div className="home">
                    <Sidebar />
                    <div className ="homecontainer">
                        <Navbar />
                            <div className="Widgets">
                                <Widgets type="user" />
                                <Widgets type="order" />
                                <Widgets type="earning" />
                                <Widgets type="balance" />     
                            
                            </div>
                            <div className="charts">
                                    <Featured />
                                    <Charts title="Last 6 Months (Revenue)" aspect={2/1} />
                            </div>
                            <div className="listContiner">
                                <div className="listTitle">Latest Trasaction</div>
                                <Table />
                            </div>
                    </div>
            </div>
        </>
    )
}

export default home;