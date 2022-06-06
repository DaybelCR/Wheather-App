import React from 'react';
import Card from '../Card/Card.jsx';
import {connect} from "react-redux";
import s from './Cards.module.css';


export  function Cards(props) {
 if(props.cities.length!==0){
   return (
     <div className={s.cards}>
       {props.cities?.map(c => <Card
           key={c.id}
           country={c.country}
           max={c.max}
           min={c.min}
           temp={c.temp}
           name={c.name}
           img={c.img}
           id={c.id}
         /> )}
     </div>
   );

 }else{
  return (
    <div className={s.noInfo}>
     <p>No hay Ciudades</p>
    </div>
 )
 }
}

function mapStateToProps(state){
  return {
    cities:state.cities
  }
  }

  export default connect(mapStateToProps,null)(Cards)




