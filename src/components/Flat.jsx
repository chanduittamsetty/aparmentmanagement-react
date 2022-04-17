import { Routes, Route, useParams } from "react-router-dom";
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
export const Flat=()=>{
    const params=useParams();
    const [data,setData]=useState({});
    const [res,setRes]=useState([]);
    useEffect(()=>{
        axios.get(`https://apartment-masai.herokuapp.com/flat/${params.flat_id}`).then(({data})=>{setData(data); setRes(data.resedent_id)})
    },[]);
    console.log("data",data);
    console.log("res",res);
    return  (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>BLOCK</TableCell>
                <TableCell align="right">FLAT-NO</TableCell>
                <TableCell align="right">RESIDENT TYPE</TableCell>
                <TableCell align="right">NAME</TableCell>
                <TableCell align="right">GENDER</TableCell>
                <TableCell align="right">AGE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody> 
              {res.map((elm) => (
                  
                  
                <TableRow
                  key={elm._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  
                  <TableCell component="th" scope="row">
                    {data.block_id.block}
                  </TableCell>
                  <TableCell align="right">{data.flat_no}</TableCell>
                  <TableCell align="right">{data.resident_type}</TableCell>
                  <TableCell align="right">{elm.name}</TableCell>
                  <TableCell align="right">{elm.gender}</TableCell>
                  <TableCell align="right">{elm.age}</TableCell>
                  
                </TableRow>
                
    
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}