export const GET_CITIES='GET_CITIES';
export const DELETE_CITY='DELETE_CITY';

const{REACT_APP_API_KEY}=process.env;
export function onSearch(ciudad){
    // if(!ciudad) return alert('Ingresa la ciudad');
    return  async function(dispatch){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${REACT_APP_API_KEY}&units=metric`)
               .then(response=>response.json())
               .then(data=>{
                   if(data.main!==undefined){
                       const city={
                           id: data.id,
                           name:data.name,
                           description:data.weather[0].description,
                           temp:Math.round(data.main.temp),
                           max:Math.round(data.main.temp_max),
                           min:Math.round(data.main.temp_min),
                           humidity: data.main.humidity,
                           pressure: data.main.pressure,
                           img: data.weather[0].icon,
                           country: data.sys.country,
                           clouds:data.clouds.all,
                           wind:data.wind.speed,
                           lat:data.coord.lat, 
                           lon:data.coord.lon,
                       }
                    dispatch({
                        type:GET_CITIES,
                        payload:city,
                    })
                   }else{
                       alert('Ciudad no encontrada');
                   }
               }
               )
    }
}


export function deleteCity(id){
    return{
        type: DELETE_CITY,
        payload:id,
    }
}
