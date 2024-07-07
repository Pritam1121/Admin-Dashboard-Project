export const userColums =[{field: 'id', headerName: 'ID', width: 50 },
{
     field: 'user', headerName: 'User', width: 150 ,renderCell:(params)=>{
        return(
            <div className="cellwithIMG">
                <img className="cellIMG" src={params.row.img} alt="avtar" />
                {params.row.username}
          
            </div>
        );
     },
},
{
    field: 'email', headerName: 'Email', width: 230 
},
{
    field:"age",headerName:"Age", width:100
},
{
    field:"status",headerName:"status", width:200,renderCell:(params)=>{
        return(
            <div className={`cellwithStatus ${params.row.status}`}>{params.row.status}</div>

        )
    }
}
];

export const userRows=[
    {
        id:1,
        username:"Snow",
        img:"https://cdn.britannica.com/79/149179-050-DC23D823/snowflake-threads-wool-coat.jpg",
        status:"active",
        email:"snow@gmail.com",
        age:35
    },
    {
        id:2,
        username:"Snow",
        img:"https://cdn.britannica.com/79/149179-050-DC23D823/snowflake-threads-wool-coat.jpg",
        status:"passive",
        email:"snow@gmail.com",
        age:40
    },
    {
        id:3,
        username:"Jemil",
        img:"https://cdn.britannica.com/79/149179-050-DC23D823/snowflake-threads-wool-coat.jpg",
        status:"active",
        email:"snow@gmail.com",
        age:32
    },
    {
        id:4,
        username:"Skuren",
        img:"https://cdn.britannica.com/79/149179-050-DC23D823/snowflake-threads-wool-coat.jpg",
        status:"pending",
        email:"snow@gmail.com",
        age:42
    },
    {
        id:5,
        username:"Snow",
        img:"https://cdn.britannica.com/79/149179-050-DC23D823/snowflake-threads-wool-coat.jpg",
        status:"active",
        email:"snow@gmail.com",
        age:30
    }
]