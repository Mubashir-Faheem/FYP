import axios from 'axios'
import {RENTING_LIST_REQUEST,RENTING_LIST_SUCCESS,RENTING_LIST_FAILS,
RENTING_DETAILS_REQUEST,RENTING_DETAILS_SUCCESS,RENTING_DETAILS_FAILS} from '../constants/rentingConstant'

export const listRentings=()=> async(dispatch)=>{
    try {
        dispatch({type:RENTING_LIST_REQUEST})
        const {data}=await axios.get('/api/services')
        dispatch({
            type:RENTING_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:RENTING_LIST_FAILS,
            payload:error.resones &&error.response.data.message
             ? error.response.data.message
             :error.message,
        });
        
    }
    }


    
export const listRentingDetails=(id)=> async(dispatch)=>{
    try {
        dispatch({type:RENTING_DETAILS_REQUEST})
        const {data}=await axios.get(`/api/services/${id}`)
        dispatch({
            type:RENTING_DETAILS_SUCCESS,
            payload:data
        })
        console.log(data)
    } catch (error) {
        dispatch({
            type:RENTING_DETAILS_FAILS,
            payload:error.resones &&error.response.data.message
             ? error.response.data.message
             :error.message,
        });
        
    }
    }