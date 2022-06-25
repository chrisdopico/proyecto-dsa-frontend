import React, { Component } from 'react';
import './App.css';

import Grid from './components/Grid';
import Mapas from './components/Mapas';
import DetalleSendor from './components/DetalleSendor';
import Graficos  from './components/Graficos';
import axios from "axios";
import {
BrowserRouter as Router,
Routes,
Route,
Link,
NavLink
} from "react-router-dom";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const url="https://redsensors-servicio-consulta.pj87j18q4um.eu-gb.codeengine.appdomain.cloud/servidores-locales";

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
      <>
      <Router>
      <div className='container'>
        <header className='bg-ligth pt-3 pb-3' >
            <Link to='/' class="d-flex justify-content-center mb-3">
              <img src='REDSensors_logo_1_sin_fondo.png' alt='Home' width="244" height="194"/>
            </Link>
          <div className='btn-group d-flex justify-content-end'>

            <NavLink to='/' className='btn btn-danger'  activeClassName='active'>
              INICIO
            </NavLink>
            <NavLink to='/graficos' className='btn btn-danger' activeClassName='active'>
              METRICAS
            </NavLink>

          </div>
        </header>
        
        <hr/>
        <Routes>
          <Route 
            path='/detalleservidor/:servidor' 
            element={<DetalleSendor dataSensores={this.state.dataSensores} />}>
          </Route>

          <Route 
            path='/graficos' 
            element={<Graficos></Graficos>}>
          </Route>

          <Route 
            path='/'    
            element={<><Grid datos={this.state.data} peticionGet={this.peticionGet} sensoresUrl={this.sensoresUrl}></Grid><Mapas  datos={this.state.data} ></Mapas></>}>
          </Route>

        </Routes>
    
      </div>
      </Router>
      </>
      
    )
  }
} 
export default App;

