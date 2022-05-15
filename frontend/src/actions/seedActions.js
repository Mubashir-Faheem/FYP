import axios from 'axios'
import {SEED_LIST_REQUEST,
    SEED_LIST_SUCCESS,
    SEED_LIST_FAILS,
    SEED_DETAILS_REQUEST,
    SEED_DETAILS_SUCCESS,
    SEED_DETAILS_FAILS} from '../constants/seedConstant'


export const listSeeds=()=> async(dispatch)=>{
try {
    dispatch({type:SEED_LIST_REQUEST})
    const {data}=await axios.get("https://mubashir-garden-mart.herokuapp.com/api/seeds")
    dispatch({
        type:SEED_LIST_SUCCESS,
        payload:data
    })
} catch (error) {
    dispatch({
        type:SEED_LIST_FAILS,
        payload:error.resones &&error.response.data.message
         ? error.response.data.message
         :error.message,
    });
    
}
}





export const listSeedDetails=(id)=> async(dispatch)=>{
    try {
        dispatch({type:SEED_DETAILS_REQUEST})
        const {data}=await axios.get(`https://mubashir-garden-mart.herokuapp.com/api/seeds/${id}`)
        dispatch({
            type:SEED_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:SEED_DETAILS_FAILS,
            payload:error.resones &&error.response.data.message
             ? error.response.data.message
             :error.message,
        });
        
    }
    }