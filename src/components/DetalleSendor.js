import { Button } from 'bootstrap';

import { useEffect, useState, useRef } from "react";


import { useParams } from "react-router-dom"



export default function DetalleSendor() {
  let params = useParams();
  const url=`http://localhost:9003/servidores-locales/${params.servidor}/sensores`;

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
            <td>{sensores.lectura.timestamp}</td>
            <td>{sensores.lectura.valor}</td>
            </tr>
        )
      }
    )
  }
       
      </tbody>
    </table>

    { <a  className='btn btn-primary' href='\'>Volver al home</a> }
      </div>


  </div>
  
 )
}