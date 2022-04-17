
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import {Link } from "react-router-dom";
import React from 'react';

export const Navbar = ()=>{
    
return<AppBar position="relative">
<Toolbar >
 <Link to={"/"}><Button variant="contained">Home</Button></Link>
 <Link to={"/login"} ><Button variant="contained" style={{marginLeft:"50px",backgroundColor:"green"}}>Login</Button></Link>
</Toolbar>
</AppBar>
}

