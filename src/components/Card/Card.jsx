import React from "react";
import {Link} from 'react-router-dom';
import { deleteCity } from "../../redux/actions";
import {connect} from "react-redux";

import s from './Card.module.css';


export function Card({max,min,name,id,img,deleteCity}){

  // console.log(props.deleteCity(id))
    // console.log(max,min,name,id)
return(
    <div className={s.card}>
    <button onClick={()=>deleteCity(id)}>X</button>
      <Link to={`/ciudad/${id}`}>
      <h2>{name}</h2>
      </Link>
      <div>
          <p>Min</p>
          <p>{min}°</p>
      </div>
      <div>
          <p>Max</p>
          <p>{max}°</p>
      </div>
      <div>
      <img className="iconoClima" src={`http://openweathermap.org/img/wn/${img}@2x.png`} width="80" height="80" alt="logo_clima" />
      </div> 
  </div>
)
}

function mapDispatchToProps(dispatch){
  return{
    deleteCity:(id)=>dispatch(deleteCity(id))
  }
  }
  
  export default connect(null,mapDispatchToProps)(Card)
  