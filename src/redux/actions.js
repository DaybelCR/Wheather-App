export const GET_CITIES='GET_CITIES';
export const DELETE_CITY='DELETE_CITY';

const{REACT_APP_API_KEY}=process.env;
export function onSearch(ciudad){
    return  async function(dispatch){
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${REACT_APP_API_KEY}`)
               .then(response=>response.json())
               .then(data=>dispatch({
                   type:GET_CITIES,
                   payload:data
               }))
    }
}


export function deleteCity(id){
    return{
        type: DELETE_CITY,
        payload:id,
    }
}