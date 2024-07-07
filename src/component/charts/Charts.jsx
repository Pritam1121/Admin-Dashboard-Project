import "./Charts.scss"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'January',
     Total:1200
    },
    
    {
        name: 'february',
       Total:2100
      },
      {
        name: 'March',
       Total:800
      },
      {
        name: 'April',
       Total:1600
      },
      {
        name: 'May',
       Total:900
      },
      {
        name: 'June',
       Total:1700
      },
  ];

const charts=({aspect,title})=>{
    return(
        <>
        <div className="Charts">
            <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" stroke="gray"/>
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="total" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
        </div>
        </>
    )
}

export default charts;