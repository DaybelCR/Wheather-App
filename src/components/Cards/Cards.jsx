import React from 'react';
import Card from '../Card/Card.jsx';
import {connect} from "react-redux";
import s from './Cards.module.css';
import Sunset from '../../assets/sunset.jpg'


export  function Cards(props) {
 
  return (
    <div className={s.cards}>
      <img src={Sunset} alt="sunset" className="responsive"></img>
      {props.cities?.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          temp={c.temp}
          name={c.name}
          img={c.img}
          id={c.id}
        /> )}
    </div>
  );
}

function mapStateToProps(state){
  return {
    cities:state.cities
  }
  }

  export default connect(mapStateToProps,null)(Cards)




