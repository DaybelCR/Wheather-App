import React from 'react';
import Card from '../Card/Card.jsx';
import {connect} from "react-redux"


export  function Cards(props) {
  console.log(props.cities)
  return (
    <div className='cards'>
      {props.cities?.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
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




