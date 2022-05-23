import axios from 'axios'
import {RENTING_LIST_REQUEST,RENTING_LIST_SUCCESS,RENTING_LIST_FAILS,
RENTING_DETAILS_REQUEST,RENTING_DETAILS_SUCCESS,RENTING_DETAILS_FAILS,RENTING_DELETE_REQUEST,RENTING_DELETE_SUCCESS,RENTING_DELETE_FAIL,
RENTING_CREATE_REQUEST,RENTING_CREATE_SUCCESS,RENTING_CREATE_FAIL,RENTING_CREATE_RESET,
RENTING_UPDATE_REQUEST,RENTING_UPDATE_SUCCESS,RENTING_UPDATE_FAIL,RENTING_UPDATE_RESET,
RENTING_CREATE_REVIEW_REQUEST,RENTING_CREATE_REVIEW_SUCCESS,RENTING_CREATE_REVIEW_FAIL,RENTING_CREATE_REVIEW_RESET,
RENTING_TOP_REQUEST,RENTING_TOP_SUCCESS,RENTING_TOP_FAIL} from '../constants/rentingConstant'
import {logout} from "../actions/userAction"


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


    export const deleteRenting = (id) => async (dispatch, getState) => {
        try {
          dispatch({
            type: RENTING_DELETE_REQUEST,
          })
      
          const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
      
          await axios.delete(`/api/services/${id}`, config)
      
          dispatch({
            type: RENTING_DELETE_SUCCESS,
          })
        } catch (error) {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          if (message === 'Not authorized, token failed') {
            dispatch(logout())
          }
          dispatch({
            type: RENTING_DELETE_FAIL,
            payload: message,
          })
        }
      }
      
      export const createRenting = () => async (dispatch, getState) => {
        try {
          dispatch({
            type: RENTING_CREATE_REQUEST,
          })
      
          const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
      
          const { data } = await axios.post(`/api/services`, {}, config)
      
          dispatch({
            type: RENTING_CREATE_SUCCESS,
            payload: data,
          })
        } catch (error) {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          if (message === 'Not authorized, token failed') {
            dispatch(logout())
          }
          dispatch({
            type: RENTING_CREATE_FAIL,
            payload: message,
          })
        }
      }
      
      export const updateRenting = (renting) => async (dispatch, getState) => {
        try {
          dispatch({
            type: RENTING_UPDATE_REQUEST,
          })
      
          const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
      
          const { data } = await axios.put(
            `/api/services/${renting._id}`,
            renting,
            config
          )
      
          dispatch({
            type: RENTING_UPDATE_SUCCESS,
            payload: data,
          })
          dispatch({ type: RENTING_DETAILS_SUCCESS, payload: data })
        } catch (error) {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          if (message === 'Not authorized, token failed') {
            dispatch(logout())
          }
          dispatch({
            type: RENTING_UPDATE_FAIL,
            payload: message,
          })
        }
      }
      
      export const createRentingReview = (rentingId, review) => async (
        dispatch,
        getState
      ) => {
        try {
          dispatch({
            type: RENTING_CREATE_REVIEW_REQUEST,
          })
      
          const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
      
          await axios.post(`/api/services/${rentingId}/reviews`, review, config)
      
          dispatch({
            type: RENTING_CREATE_REVIEW_SUCCESS,
          })
        } catch (error) {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          if (message === 'Not authorized, token failed') {
            dispatch(logout())
          }
          dispatch({
            type: RENTING_CREATE_REVIEW_FAIL,
            payload: message,
          })
        }
      }
      
      export const listTopRentings = () => async (dispatch) => {
        try {
          dispatch({ type: RENTING_TOP_REQUEST })
      
          const { data } = await axios.get(`/api/services/top`)
      
          dispatch({
            type: RENTING_TOP_SUCCESS,
            payload: data,
          })
        } catch (error) {
          dispatch({
            type: RENTING_TOP_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
      }