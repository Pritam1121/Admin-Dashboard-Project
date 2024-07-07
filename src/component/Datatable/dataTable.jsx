import './dataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { userColums,userRows } from '../../datatablesource';
import { useState } from 'react';

const DataTable = () => {

   const[data,setData]=useState(userRows)

  const handleDalete=(id)=>{
    setData(data.filter(item=>item.id !== id))
  }

  const actionColumn =[
    {
      field:"action", headerName:"Action",Width:200,renderCell:(params)=>{
    return(
    <>
        <div className='cellAction'>
          <Link to="/users/test" style={{textDecoration:"none"}}>  
          <div className='ViewButton'>View</div>
          </Link>
          <div className='DeleteButton' onClick={()=>handleDalete(params.row.id)}>Delete</div>
        </div>
       
    </>
    )
  },
},
];

  return (
    <>
      <div className="dataTable" >
        <div className="datatableTitle">
          Add New User
          <Link to="/users/new" className='DataTableLink' style={{textDecoration:"none"}}>
          Add New
          </Link>
        </div>
      <DataGrid
      className="dataGrid"
          rows={data}
          columns={userColums.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default DataTable;


  