import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {fetchdata,getdata} from "../Redux/Data/getdata"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';






export const Home=()=> {

    // const dispatch=useDispatch();
    
    const [data,setData]=useState([])
    const [flag,setFlag]=useState(false)
    useEffect(()=>{
        axios.get("https://apartment-masai.herokuapp.com/flat").then(({data})=>{setData(data)})
    },[]);
    const user=useSelector((store)=>(console.log(store))) ||[];
    const length=(arr)=>{
        return arr.length
    }
    const navigate=useNavigate();
    const sorting=()=>{
        if(!flag){
        setData([...data.sort((a,b)=>b.flat_no-a.flat_no)])
        setFlag(true)
        }else{
            setData([...data.sort((a,b)=>a.flat_no-b.flat_no)]) 
            setFlag(false)
        }

        // dispatch(getdata(data))
        // console.log(data);
    }
    const [search,setSearch]=useState("")
    const handleChange=(e)=>{
        const {id,value}=e.target;
        setSearch(value);
      }
    const finding=()=>{
        let ndata=data.filter((elm)=>{if(elm.block_id.block==search){return elm}});
        setData(ndata)
    }
  return (
    <TableContainer component={Paper}>
        <Button variant="outlined" style={{marginTop:"30px"}} onClick={()=>{sorting()}}>Sort</Button>
        <TextField
        label="Search Block Name(A-block/B-block)"
        variant="standard"
        color="warning"
        focused
        style={{marginLeft:"50px",marginTop:"30px"}}
        onChange={handleChange}
      />
      <Button variant="outlined" style={{marginTop:"30px"}} onClick={()=>{finding()}}>Search</Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>BLOCK</TableCell>
            <TableCell align="right">FLAT-NO</TableCell>
            <TableCell align="right">RESIDENT TYPE</TableCell>
            <TableCell align="right">No-of RESIDENTS</TableCell>
            <TableCell align="right">EDIT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          {data.map((elm) => (
              
              
            <TableRow
              key={elm._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={()=>{return navigate(`/flat/${elm._id}`)}}>
              
              <TableCell component="th" scope="row">
                {elm.block_id.block}
              </TableCell>
              <TableCell align="right">{elm.flat_no}</TableCell>
              <TableCell align="right">{elm.resident_type}</TableCell>
              <TableCell align="right">{length(elm.resedent_id)}</TableCell>
              <TableCell align="right"><Button variant="outlined">Edit</Button></TableCell>
            </TableRow>
            

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
