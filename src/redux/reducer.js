import { GET_CITIES,DELETE_CITY } from "./actions";
const initialState={
    cities:[],
} 
 function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_CITIES:
   if(state.cities.some(c=>c.name===action.payload.name)){
       alert('La ciudad ya esta registrada');
      return {
          ...state,
          cities:[...state.cities]
      }
   }else{
    return{
        ...state,
    cities: [...state.cities,action.payload]
    }
   }    
        case DELETE_CITY:
            return{
            ...state,
            cities: state.cities.filter((city)=> city.id!==action.payload)
            }
        default:
            return{
                ...state,
            }
    }
}

export default rootReducer;