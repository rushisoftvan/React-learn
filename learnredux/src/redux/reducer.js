//

import {ADD_COUNT, MINUS_COUNT, MULTIPALE_COUNT, SHOW_USER} from "./ACTIONS/action-type";
const initialState = {
    count : 0,
    user:{

    }
}

const reducer = (state=initialState,action)=>{
    console.log(action.type);
    console.log(action.payload);
  switch(action.type){
      case  ADD_COUNT :
          return  {
              ...state,count:state.count+1
          }
      case MINUS_COUNT:
          return {
          ...state,count:state.count-1
      }
      case MULTIPALE_COUNT:
          return {
              ...state,count:state.count*action.payload
          }
      case SHOW_USER :
          return {

                ...state,user : action.payload
              }





      default : return state;
  }
}
export default reducer;