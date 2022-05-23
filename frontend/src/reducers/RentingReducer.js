import {RENTING_LIST_REQUEST,RENTING_LIST_SUCCESS,RENTING_LIST_FAILS,
RENTING_DETAILS_REQUEST,RENTING_DETAILS_SUCCESS,RENTING_DETAILS_FAILS} from '../constants/rentingConstant'

export const rentingListReducer=(state={rentings:[]},action)=>{

    switch(action.type){
        case RENTING_LIST_REQUEST:
            return{loading:true,rentings:[]}
        case RENTING_LIST_SUCCESS:
            return {loading:false,rentings:action.payload}
        case RENTING_LIST_FAILS:
            return{loading:false,error:action.payload}
        default:
            return state;            

    }
}


export const rentingDetailsReducer = (
    state = { renting: {} },
    action
  ) => {
    switch (action.type) {
      case RENTING_DETAILS_REQUEST:
        return { loading: true, ...state };
      case RENTING_DETAILS_SUCCESS:
        return { loading: false, renting: action.payload };
      case RENTING_DETAILS_FAILS:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  console.log(rentingDetailsReducer)
