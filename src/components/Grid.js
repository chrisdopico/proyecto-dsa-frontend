import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./styles/Grid.css";




export class Grid extends Component {
  render() {

    const datos = this.props.datos;
    return (
      <div>
         <table className="table">
      <thead>
        <tr>
          <th>Nombre Servidor</th>
          <th>Estado</th>
          <th>Cambio de estado</th>
          
        </tr>
      </thead>
      <tbody>
        {datos.map(servidor=>{
           
            return servidor.estado.estado=="trabajando"?
            <tr>
            <td>
            <Link to={{pathname:`/detalleservidor/${servidor._id}`}}>
              <a href='#'> {servidor._id} </a>
           </Link>
            </td>
            <td>{servidor.estado.estado}</td>
            <td>{servidor.estado.timestamp}</td>
            <td>{<img src='comprobado.png'></img>}</td>
            </tr>
            : servidor.estado.estado=="incendio"?
            <tr>
              <td>
            <Link to={{pathname:`/detalleservidor/${servidor._id}`}}>
              <a href='#'> {servidor._id} </a>
           </Link>
            </td>
            <td>{servidor.estado.estado}</td>
            <td>{servidor.estado.timestamp}</td>
            <td>{<img src='fuego.png'></img>}</td>
            </tr>
            : servidor.estado.estado=="presencia"?
            <tr>
             <td>
            <Link to={{pathname:`/detalleservidor/${servidor._id}`}}>
              <a href='#'> {servidor._id} </a>
           </Link>
            </td>
            <td>{servidor.estado.estado}</td>
            <td>{servidor.estado.timestamp}</td>
            <td>{<img src='espiar.png'></img>}</td>
            </tr>
            :
            <tr>
             <td>
            <Link to={{pathname:`/detalleservidor/${servidor._id}`}}>
              <a href='#'> {servidor._id} </a>
           </Link>
            </td>
            <td>{servidor.estado.estado}</td>
            <td>{servidor.estado.timestamp}</td>
            <td>{<img src='cancelar.png'></img>}</td>
            </tr>

             })}
       
      </tbody>
    </table>

    <button type="button" className='btn btn-primary' onClick={()=> this.props.peticionGet()}>Actualizar</button>
    <a  className='btn btn-primary botonGraficos' href='Graficos'>Graficos generales</a>
      </div>
    )
  }
}

export default Grid;