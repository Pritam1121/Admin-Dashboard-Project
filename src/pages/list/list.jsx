import "./list.scss"
import SideBar from "../../component/sidebar/SideBar";
import NavBar from "../../component/navbar/Navbar";
import DataTable from "../../component/Datatable/dataTable";
const list=()=>{
    return(
        <>
            <div className="list">
                <SideBar />
                <div className="listContainer">
                <NavBar />
                <DataTable />
                </div>
            </div>
        </>
    )
}

export default list;