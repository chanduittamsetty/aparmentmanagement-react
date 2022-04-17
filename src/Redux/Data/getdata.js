//action type
import axios from 'axios'
export const GET_DATA ="GET_DATA";

//action creator
export const getdata =(data)=>({type:GET_DATA,payload:data});

export const fetchdata=()=>async (dispatch)=>{
    const {data}=await axios.get("http://apartment-masai.herokuapp.com/flat");
    dispatch(getdata(data));
    console.log(data)
}