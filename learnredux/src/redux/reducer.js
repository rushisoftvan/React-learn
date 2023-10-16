//

import {ADD_COUNT, MINUS_COUNT} from "./ACTIONS/action-type";
const initialState = {
    count : 0
}

const reducer = (state=initialState,action)=>{
    console.log(state.count);
  switch(action.type){
      case  ADD_COUNT :
          return  {
              ...state,count:state.count+1
          }
      case MINUS_COUNT:
          return {
          ...state,count:state.count-1
      }
      default : return state;
  }
}
export default reducer;