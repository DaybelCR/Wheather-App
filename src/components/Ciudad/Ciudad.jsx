import React from 'react';
import { connect } from 'react-redux';
import s from './Ciudad.module.css'

export function Ciudad({match,cities}) {
    const idCiudad=match.params.ciudadId;
    const ciudadFiltrada=cities.filter(c=>c.id===parseInt(idCiudad));
     console.log(ciudadFiltrada);
  if(ciudadFiltrada.length!==0){
    return (
      <section className={s.section} >
          <h2>{ciudadFiltrada[0].name}</h2>
          <div >
              <p>Temperatura: {ciudadFiltrada[0].main.temp} ºC</p>
              <p>Clima: {ciudadFiltrada[0].weather[0].main}</p>
              <p>Viento: {ciudadFiltrada[0].wind.speed} km/h</p>
              <p>Cantidad de nubes: {ciudadFiltrada[0].clouds.all}</p>
              <p>Latitud: {ciudadFiltrada[0].coord.lat}º</p>
              <p>Longitud: {ciudadFiltrada[0].coord.lon}º</p>
          </div>
      </section>
    )
  }else{
    return(<section >No existe la ciudad</section>)
  }
}

function mapStateToProps(state){
  return {
    cities:state.cities
  }
  }

  export default connect(mapStateToProps,null)(Ciudad)
