import React, { Component } from 'react'




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
          return(
            <tr>
            <td><a href="#">{servidor._id}</a></td>
            <td>{servidor.estado.estado}</td>
            <td>{servidor.estado.timestamp}</td>
           
            </tr>
          )
           /* 
            return servidor.estado.estado=="trabajando"?
            <tr>
            <td><a href="#">{servidor._id}</a></td>
            <td>{servidor.estado.estado}</td>
            <td>{servidor.estado.timestamp}</td>
            <td>{<img src='comprobado.png'></img>}</td>
            </tr>
            : servidor.estado.estado=="incendio"?
            <tr>
            <td><a href="#">{servidor._id}</a></td>
            <td>{servidor.estado.estado}</td>
            <td>{servidor.estado.timestamp}</td>
            <td>{<img src='fuego.png'></img>}</td>
            </tr>
            : servidor.estado.estado=="presencia"?
            <tr>
            <td><a href="#">{servidor._id}</a></td>
            <td>{servidor.estado.estado}</td>
            <td>{servidor.estado.timestamp}</td>
            <td>{<img src='espiar.png'></img>}</td>
            </tr>
            :
            <tr>
            <td><a href="#">{servidor._id}</a></td>
            <td>{servidor.estado.estado}</td>
            <td>{servidor.estado.timestamp}</td>
            <td>{<img src='cancelar.png'></img>}</td>
            </tr> */

             })}
       
      </tbody>
    </table>

    <button type="button" className='btn btn-primary' onClick={()=> this.props.peticionGet()}>Actualizar</button>
      </div>
    )
  }
}

export default Grid;