import React, { Component } from 'react';

import Grid from './components/Grid';
import Mapas from './components/Mapas';
import axios from "axios";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';



const url="http://localhost:9003/servidores-locales";

 class App extends Component {
   state={
    data:[]

   }

   peticionGet=()=>{
     axios.get(url).then(response=>{
       this.setState({data:response.data})
     })
   }

   componentDidMount(){
     this.peticionGet();
   }

  render() {
    return (<div className='container'>
      <Grid datos={this.state.data} peticionGet={this.peticionGet}/>
      <Mapas datos={this.state.data} />
     
  
    </div>
    )
  }


} 

export default App;