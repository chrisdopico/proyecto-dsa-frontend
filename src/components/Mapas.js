import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

export class Mapas extends Component {
  render() {
    const datos = this.props.datos;
   
    
    return (
        <Map google={this.props.google}
        style={{width: '70%', height: '80%', position: 'relative'}}
        className={'map'}
        initialCenter={{ lat: 40.416775, lng: -3.703790 }}   // Mapa centrado en la península ibérica
        streetViewControl={false}
        fullscreenControl={false}
        //  gestureHandling='none' //this will disable scroll wheel
        disableDefaultUI= {true}
        zoom={6}>
        {datos.map(servidor=>{
          console.log(servidor);
            return(
              <Marker
              title={"Nombre del servidor: " + servidor._id + "\n" + 
              "Hora del estado del servidor: " + servidor.estado.timestamp + "\n" + 
              "Estado del servidor: " + servidor.estado.estado + "\n" +
              "Posición (longitud): " + servidor.longitud + "\n" +
              "Posición (latitud): " + servidor.latitud                    
              }  
              position={{lat: servidor.latitud, lng: servidor.longitud}}
              
              icon={{
          
                url: 
                servidor.estado.estado=="trabajando"? 
                'icons8-marcador-32 (5).png'
                : servidor.estado.estado=="incendio"?
                'icons8-marcador-32 (3).png' 
                :  servidor.estado.estado=="presencia"?
                'marcador-azul.png' 
                : servidor.estado.estado=="desconectado"?
                'marcador-negro' 
                :'icons8-marcador-32 (4).png' 
                
            
            
        
            }}
              
              />
              
              )
         })}
    </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyChphipsmZsoBg5QTRbI51hPNp_H4ynasQ"
})(Mapas)