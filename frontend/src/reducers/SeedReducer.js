import { SEED_LIST_REQUEST,
    SEED_LIST_SUCCESS,
    SEED_LIST_FAILS,
    SEED_DETAILS_REQUEST,
    SEED_DETAILS_SUCCESS,
    SEED_DETAILS_FAILS} from '../constants/seedConstant'

export const seedListReducer=(state={seeds:[]},action)=>{

    switch(action.type){
        case SEED_LIST_REQUEST:
            return{loading:true,seeds:[]}
        case SEED_LIST_SUCCESS:
            return {loading:false,seeds:action.payload}
        case SEED_LIST_FAILS:
            return{loading:false,error:action.payload}
        default:
            return state;            

    }

    
}

export const seedDetailsReducer=(state={seeds:{reviews:[]}},action)=>{

    switch(action.type){
        case SEED_DETAILS_REQUEST:
            return{loading:true,...state}
        case SEED_DETAILS_SUCCESS:
            return {loading:false,seed:action.payload}
        case SEED_DETAILS_FAILS:
            return{loading:false,error:action.payload}
        default:
            return state;            

    }}
