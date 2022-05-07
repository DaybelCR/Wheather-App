import React from 'react';
import { connect } from 'react-redux';
import s from './Ciudad.module.css'

export function Ciudad({match,cities}) {
    const idCiudad=match.params.ciudadId;
    const [ciudadFiltrada]=cities.filter(c=>c.id===parseInt(idCiudad));
    if(ciudadFiltrada!==undefined){
    return (
      <section className={s.section} >
          <h2>{`${ciudadFiltrada.name}-${ciudadFiltrada.country}`}</h2>
          <div >
              <p>Temperatura: {ciudadFiltrada.temp} ºC</p>
              <p>Clima: {ciudadFiltrada.description}</p>
              <p>Viento: {ciudadFiltrada.wind} km/h</p>
              <p>Cantidad de nubes: {ciudadFiltrada.clouds}</p>
              <p>Latitud: {ciudadFiltrada.lat}º</p>
              <p>Longitud: {ciudadFiltrada.lon}º</p>
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
