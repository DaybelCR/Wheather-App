import React, { useState } from "react";
import { onSearch } from "../../redux/actions";
import {connect} from "react-redux"
import s from './SearchBar.module.css';

export  function SearchBar(props) {
  const [city, setCity] = useState("");
 
  function handleSubmit(e) {
    e.preventDefault();
    props.getCities(city);
    setCity('');
  }
   function handleChange(e){
    setCity(e.target.value)
   }
 
  return (
    <form onSubmit={(e)=>handleSubmit(e)} className={s.form}>
      <input className={s.myInput}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(e)=>handleChange(e)}
      />
      <input className={s.myButton} type="submit" value="Agregar" />
    </form>
  );
}



function mapDispatchToProps(dispatch){
return{
  getCities:(ciudad)=>dispatch(onSearch(ciudad))
}
}

export default connect(null,mapDispatchToProps)(SearchBar)

