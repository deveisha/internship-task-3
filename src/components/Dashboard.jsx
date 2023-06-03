import { Grid, Paper, Table } from '@mui/material'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DescriptionIcon from '@mui/icons-material/Description';
import { makeStyles } from '@mui/styles';
import MovingIcon from '@mui/icons-material/Moving';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import avatar from './images/avatar.avif'
import graph from './images/graph.png'
import graph2 from './images/graph2.png'
import { BorderClear } from '@mui/icons-material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import { styled, alpha } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from 'react-router-dom';
const useStyles=makeStyles({
    grid:{
    display:'flex',justifyContent:'space-around',flexWrap:'wrap'
    },
    icon:{
        color:'green',
       
    },
    boxI:{
       
       width:'100%',
       backgroundColor:'aqua'
    },
    card:{
        borderRadius:'20px'
    },
     avatar:{
            height:'50px',
            width:'50px',
            borderRadius:'50%',
            // marginRight:'70%'
           
            
        },
        
})
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const Dashboard = () => {

const classes=useStyles()
    const arr=[
        {
            name:'Document',
            price:'146.000',
            icon: <DescriptionIcon/>
        },
        {
            name:'Document',
            price:'1400',
            icon: <AssignmentIcon/>
        },
        {
            name:'Document',
            price:'150.700',
            icon: <EmailIcon/>
        },
       
        
]

const arr2=[
{
    name:'Gadget converter',
    price:'250',
    image: {avatar}
},
{
    name:'lens camera',
    price:'50',
    image: {avatar}
},
{
    name:'Airpods',
    price:'100',
    image: {avatar}
}
]

const chat=[
    {
      name:'Debra Young',
      msg:'How is my product?',
      image: {avatar}
    },
    {
      name:'Dorothy Collins',
      msg:'How was the meeting?',
      image: {avatar}
    },
    {
      name:'Chris Jordan',
      msg:'How employee performance',
      image: {avatar}
    },
    {
      name:'Denise Morphy',
      msg:'How was the meeting?',
      image: {avatar}
    },
]
  return (
    <>
<Box sx={{display:'flex',flexDirection:'row',flexWrap:"wrap"}}>
    <Box   sx={{width:{xl:'83%',sm:'100%',md:'100%'},display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
   
   <Box sx={{display:"flex",flexDirection:"column",justifyContent:'space-around',flexWrap:'wrap'}}>



    <Box sx={{display:'flex',flexDirection:'row',justifyContent:{xl:'space-around',sm:'center',md:'center',xs:"center"},flexWrap:'wrap',marginLeft:{xl:'0px',md:'10%',sm:'29%'},marginTop:'5%'}}>
    {arr.map((item)=>(
    <Box>
        <Card sx={{ minWidth: 275,borderRadius:'29px' }}>
      <CardContent>
      <Typography sx={{ mb: 1.5,float:'right' }} color="text.secondary">
         {item.icon}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {item.name}
        </Typography>
        
        <Typography variant="h5" component="div">
         {item.price}
        </Typography>
        
        <Typography variant="body2">
        
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
       <span className={classes.icon}><MovingIcon />17%</span> <span>since last week</span> 
      </CardActions>
    </Card>
  </Box>
    ))}
    </Box>
    <Box sx={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',marginTop:'4%',marginLeft:{xl:'0px',md:'10%',sm:'29%'}}}>
<Paper sx={{width:{xl:"46%",xs:'80%'} ,textAlign:'left'}}>
   <Typography variant='h6'>Recent workflow</Typography>
   <MovingIcon className={classes.icon}/>
   <img style={{width:'100%',height:'90%',float:'right'}} src={graph} alt="" />
</Paper>

<Paper sx={{width:{xl:"46%",xs:'80%'} ,textAlign:'left'}}>
   <Typography variant='h6'>Recent workflow</Typography>
   <MovingIcon className={classes.icon}/>
   <img style={{width:'100%',height:'83%',float:'right'}} src={graph2} alt="" />
</Paper>
</Box>
   </Box>
  
 
   </Box>
   
  
   
    <Box    sx={{width:{xl:'17%',sm:'80%',md:'75%',xs:'96%',marginTop:{xl:'29px',xs:'10%'},marginLeft:{xl:'0px',md:'60%',sm:'49%',xs:'10%'}}}}>
    <Paper  sx={{width:'100%',marginTop:{xs:'40px'}}}>
        <Typography variant='h6'>Popular products</Typography>
     {arr2.map((item)=>(
        <>
        <Box sx={{height:{xl:'8px',xs:'22px'},marginRight:{xl:'70%',sm:'15%',xs:'49%'}}} >
              <img className={classes.avatar} src={item.image} alt="" /> 
               </Box>
              <Typography sx={{fontWeight:'bold',marginLeft:{xl:'0px',sm:'25%',md:'22%'}}}>{item.name}</Typography> 
              <Typography sx={{marginLeft:{xl:'0px',sm:'25%',md:'22%'}}}>${item.price}</Typography>
              </>   
     ))}
     <Typography variant='h6' sx={{marginTop:{xl:"7%",sm:'5%'},marginLeft:{xl:"0px",sm:'18%',xs:'19%'}}}>chat</Typography>
   
   
    {chat.map((item)=>(
        <>
        <Box sx={{height:{xl:'20px',sm:'25px',xs:'13px'},marginRight:{xl:'70%',sm:'15%',xs:'49%',md:'18%'}}}>
           <img className={classes.avatar} src={item.image} alt="" />
              </Box>
              <Typography sx={{fontWeight:'bold',marginLeft:{xl:'0px',sm:'25%',md:'22%'}}}>{item.name}</Typography> 
              <Typography sx={{marginLeft:{xl:'0px',sm:'25%',md:'22%'}}}>{item.msg}</Typography>
              
              </> 
          
     ))}

     </Paper>
    </Box>
    <Box sx={{display:"flex",justifyContent:'center',width:{xl:'93%',sm:'95%',md:'94%',xs:'97%'},marginTop:'3%',mb:3}}>
    <Box sx={{ height: 400, width: '65%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

     
    </Box>
    </Box>
  


    </>
  )
}

export default Dashboard
