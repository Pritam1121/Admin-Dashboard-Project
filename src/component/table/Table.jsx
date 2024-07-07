import "./Table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const list=()=>{

    const rows =[
        {
            id:101411,
            product:"Acer Nitro 5",
            img:"https://laptopmedia.com/wp-content/uploads/2021/08/1-21.jpg",
            customer:"Kevin Poul",
            date:"01 March",
            amount: 785,
            method:"Cash on Delivary",
            status:"Approved"
        },  {
            id:101412,
            product:"Acer Nitro 5",
            img:"https://laptopmedia.com/wp-content/uploads/2021/08/1-21.jpg",
            customer:"Kevin Poul",
            date:"01 March",
            amount: 785,
            method:"Cash on Delivary",
            status:"Pending"
        },
        {
            id:101413,
            product:"Acer Nitro 5",
            img:"https://laptopmedia.com/wp-content/uploads/2021/08/1-21.jpg",
            customer:"Kevin Poul",
            date:"01 March",
            amount: 785,
            method:"Cash on Delivary",
            status:"Approved"
        },
        {
            id:101414,
            product:"Acer Nitro 5",
            img:"https://laptopmedia.com/wp-content/uploads/2021/08/1-21.jpg",
            customer:"Kevin Poul",
            date:"01 March",
            amount: 785,
            method:"Cash on Delivary",
            status:"Pending"
        },
        {
          id:101516,
          product:"Acer Nitro 5",
          img:"https://laptopmedia.com/wp-content/uploads/2021/08/1-21.jpg",
          customer:"Kevin Poul",
          date:"01 March",
          amount: 785,
          method:"Cash on Delivary",
          status:"Pending"
      }
    ];

    return(
        <>
              <TableContainer component={Paper} className="Table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            {/* <TableCell className="tableCell">Image</TableCell> */}
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}  >
              <TableCell >{row.id}</TableCell>
              <TableCell className="tableCell">
                    <div className="cellWrapper">
                            <img src={row.img} alt="" />
                            {row.product}
                    </div>
              </TableCell>
              {/* <TableCell className="tableCell">{row.img}</TableCell> */}
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </>
    )
}

export default list;