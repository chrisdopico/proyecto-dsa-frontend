import React, { Component } from 'react';

import Grid from './components/Grid';
import Mapas from './components/Mapas';
import DetalleSendor from './components/DetalleSendor';
import axios from "axios";
import {
BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const url="http://localhost:9003/servidores-locales";

 class App extends Component {
   state={
    data:[],
    dataSensores:[],
  
 

   }

   peticionGet=()=>{
     axios.get(url)
     .then(response=>{
       this.setState({data:response.data})
     })

     .catch((error) => {
      // Error
      if (error.response) {
        window.alert("El servidor ha respondido con un codigo fuera del 200, ha habido un error en el lado del servidor");
      } else if (error.request) {
        window.alert("La llamada se ha hecho pero no ha habido respuesta por parte del servidor");
          console.log(error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          window.alert("Error ocurrido al configurar la llamada");
          console.log('Error', error.message);
      }
      console.log(error.config);
  });
   }

   componentDidMount(){
     
     this.peticionGet();
   }

   // Metodo que sirve para concatenar o saber el servidor en el que se esta accediendo
  

  render() {
    return (
    <Router>
    <div className='container'>
      <Routes>
        <Route 
          path='/detalleservidor/:servidor' element={<DetalleSendor dataSensores={this.state.dataSensores} />}>
        </Route>

        <Route path='/'    
          element={<><Grid datos={this.state.data} peticionGet={this.peticionGet} sensoresUrl={this.sensoresUrl}></Grid><Mapas  datos={this.state.data} ></Mapas></>}>
        </Route>

      </Routes>
  
    </div>
    </Router>
    )
  }
} 
export default App;

