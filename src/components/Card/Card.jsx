import React from "react";
import {Link} from 'react-router-dom';
import { deleteCity } from "../../redux/actions";
import {connect} from "react-redux";

import s from './Card.module.css';


export function Card({max,min,temp,name,id,img,country,deleteCity}){

  
return(
    <div className={s.card}>
    <button onClick={()=>deleteCity(id)}>X</button>
     
      <img className="iconoClima" src={`http://openweathermap.org/img/wn/${img}@2x.png`} width="150" height="150" alt="logo_clima" /> 
     
    <h1>{temp}°</h1>

          <h3>{`${name}-${country}`}</h3>
          <Link to={`/ciudad/${id}`}>Ver más</Link>
          <div><span>Min {min}°</span>
          <span>Max {max}°</span></div>  
  </div>
)
}

function mapDispatchToProps(dispatch){
  return{
    deleteCity:(id)=>dispatch(deleteCity(id))
  }
  }
  
  export default connect(null,mapDispatchToProps)(Card)
  