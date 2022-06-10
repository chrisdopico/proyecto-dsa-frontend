import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

export class Mapas extends Component {
  render() {
    const datos = this.props.datos;
   
    
    return (
        <Map google={this.props.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        defaultCenter={{ lat: 0 , lng: 0 }}
        zoom={2}>
        {datos.map(servidor=>{
            return(
              <Marker
              title={"Nombre del servidor: " + servidor._id + "\n" + 
              "Hora del estado del servidor: " + servidor.estado.timestamp + "\n" + 
              "Estado del servidor: " + servidor.estado.estado                        
              }  
              position={{lat: servidor.latitud, lng: servidor.longitud}} />
              )
         })}
    </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyChphipsmZsoBg5QTRbI51hPNp_H4ynasQ"
})(Mapas)