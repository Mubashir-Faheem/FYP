import axios from 'axios'
import {FERTILIZER_LIST_REQUEST,
    FERTILIZER_LIST_SUCCESS,
    FERTILIZER_LIST_FAILS,
    FERTILIZER_DETAILS_REQUEST,
    FERTILIZER_DETAILS_SUCCESS,
    FERTILIZER_DETAILS_FAILS} from '../constants/fertilizerConstant'


export const listFertilizers=()=> async(dispatch)=>{
try {
    dispatch({type:FERTILIZER_LIST_REQUEST})
    const {data}=await axios.get("https://mubashir-garden-mart.herokuapp.com/api/fertilizers")
    dispatch({
        type:FERTILIZER_LIST_SUCCESS,
        payload:data
    })
} catch (error) {
    dispatch({
        type:FERTILIZER_LIST_FAILS,
        payload:error.resones &&error.response.data.message
         ? error.response.data.message
         :error.message,
    });
    
}
}





export const listFertilizerDetails=(id)=> async(dispatch)=>{
    try {
        dispatch({type:FERTILIZER_DETAILS_REQUEST})
        const {data}=await axios.get(`https://mubashir-garden-mart.herokuapp.com/api/fertilizers/${id}`)
        dispatch({
            type:FERTILIZER_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:FERTILIZER_DETAILS_FAILS,
            payload:error.resones &&error.response.data.message
             ? error.response.data.message
             :error.message,
        });
        
    }
    }