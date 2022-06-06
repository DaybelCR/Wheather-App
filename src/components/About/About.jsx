// import { connect } from 'react-redux'
import React, { Component } from 'react';
import s from './About.module.css'

export default class About extends Component {

  render() {
    return (
       <div className={s.about}>
        <p className={s.parrafo}>Hola , mi nombre es Daysi y te doy la bienvenida al app de clima .Aquí podrás obtener información del tiempo
           actual , de acuerdo a la ciudad ingresada en la barra de búsqueda. </p>
       </div>
    )
  }
}
