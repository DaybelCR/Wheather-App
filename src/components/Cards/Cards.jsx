import React from 'react';
import Card from '../Card/Card.jsx';
import {connect} from "react-redux";
import s from './Cards.module.css';


export  function Cards(props) {
  // console.log(props.cities)
  return (
    <div className={s.cards}>
      {props.cities?.map(c => <Card
          key={c.id}
          max={c.main.temp_max}
          min={c.main.temp_min}
          name={c.name}
          img={c.weather[0].icon}
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




