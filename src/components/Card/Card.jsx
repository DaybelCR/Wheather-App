import React from "react";
import {Link} from 'react-router-dom';
import { deleteCity } from "../../redux/actions";
import {connect} from "react-redux";

import s from './Card.module.css';


export function Card({max,min,temp,name,id,img,deleteCity}){
//https://www.designspiration.com/save/955157256282911/
  
return(
    <div className={s.card}>
    <button onClick={()=>deleteCity(id)}>X</button>
      <Link to={`/ciudad/${id}`}>
      <img className="iconoClima" src={`http://openweathermap.org/img/wn/${img}@2x.png`} width="150" height="150" alt="logo_clima" />
      </Link>
     
      
    <p>{temp}°</p>
    <h2>{name}</h2>

          <p>Min</p>
          <p>{min}°</p>
          <p>Max</p>
          <p>{max}°</p>
     
  </div>
)
}

function mapDispatchToProps(dispatch){
  return{
    deleteCity:(id)=>dispatch(deleteCity(id))
  }
  }
  
  export default connect(null,mapDispatchToProps)(Card)
  