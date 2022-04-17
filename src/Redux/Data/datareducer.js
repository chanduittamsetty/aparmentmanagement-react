import {GET_DATA} from "./getdata"
const initialState={
    data:[]
}

export const datareducer =(store=initialState,{type,payload})=>{
    switch(type){
        case GET_DATA:
        return {...store,data:payload};
        default:
            return store;
    }

}