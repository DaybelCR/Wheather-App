import { GET_CITIES,DELETE_CITY } from "./actions";
const initialState={
    cities:[],
} 
 function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_CITIES:
             //  setCity(estadoPrevio=>{
  //    if(estadoPrevio.some(c=>c.name===ciudad.name))return estadoPrevio;
  //    else [...estadoPrevio,ciudad];
  //  }) 
            return{
                ...state,
            cities: [...state.cities,action.payload]
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