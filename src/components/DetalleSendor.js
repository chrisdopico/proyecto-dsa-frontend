import { Button } from 'bootstrap';

import { useEffect, useState, useRef } from "react";


import { useParams } from "react-router-dom"

import './styles/DetallesSensor.css'



export default function DetalleSendor() {
  let params = useParams();

  const url=`https://redsensors-servicio-consulta.pj87j18q4um.eu-gb.codeengine.appdomain.cloud/servidores-locales/${params.servidor}/sensores`;

  const urlGrafico=`https://charts.mongodb.com/charts-project-0-dlyxq/embed/charts?id=62b22be2-cbdc-41de-8a7a-ad1b8a0d0c51&maxDataAge=3600&theme=light&autoRefresh=true&filter={'idSensor':'${params.servidor}_temperatura_0'}`;


  const [isLoading, setIsLoading] = useState(true);
  const [datav1, setDataV1] = useState(null);
  

   useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dataAux) => {
        setDataV1(dataAux);
        setIsLoading(false);
        console.log(dataAux)
      });
  }, []); 

  
  if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="container">
        <h1>Cargando...</h1>
      </div>
    );
  }
 
  return( 
    
  <div>

     { <h2> Lectura de sensores del servidor {params.servidor}</h2>  }

     <div>
         <table className="table">
      <thead>
        <tr>
          <th>Nombre del sensor</th>
          <th>Tipo</th>
          <th>Ulltima lectura del servidor</th>
          <th>Valor recogido del sensor</th>
          
        </tr>
      </thead>
      <tbody>
       {
       
       datav1.sensores.map(sensores =>{
        return(
          <tr>
            
            <td>{sensores._id}</td>
            <td>{sensores.type}</td>
            <td>{sensores.lectura === undefined ? "-" : sensores.lectura.timestamp}</td>
            <td>{sensores.lectura === undefined || sensores.lectura.valor==1 ? "-" : sensores.lectura.valor+"°"}</td>
            </tr>
        )
      }
    )
  }
       
      </tbody>
    </table>

    { <a  className='btn btn-primary' href='\'>Volver al home</a> }



      </div>

<div className='container'>
  
<iframe className='recuadro' src={urlGrafico}></iframe>
</div>

    


  </div>
  
 )
}