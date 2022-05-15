import { FERTILIZER_LIST_REQUEST,
    FERTILIZER_LIST_SUCCESS,
    FERTILIZER_LIST_FAILS,
    FERTILIZER_DETAILS_REQUEST,
    FERTILIZER_DETAILS_SUCCESS,
    FERTILIZER_DETAILS_FAILS} from '../constants/fertilizerConstant'

export const fertilizerListReducer=(state={fertilizers:[]},action)=>{

    switch(action.type){
        case FERTILIZER_LIST_REQUEST:
            return{loading:true,fertilizers:[]}
        case FERTILIZER_LIST_SUCCESS:
            return {loading:false,fertilizers:action.payload}
        case FERTILIZER_LIST_FAILS:
            return{loading:false,error:action.payload}
        default:
            return state;            

    }

    
}

export const fertilizerDetailsReducer=(state={fertilizers:{reviews:[]}},action)=>{

    switch(action.type){
        case FERTILIZER_DETAILS_REQUEST:
            return{loading:true,...state}
        case FERTILIZER_DETAILS_SUCCESS:
            return {loading:false,fertilizer:action.payload}
        case FERTILIZER_DETAILS_FAILS:
            return{loading:false,error:action.payload}
        default:
            return state;            

    }}
