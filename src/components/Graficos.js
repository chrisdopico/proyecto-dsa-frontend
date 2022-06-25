import PropTypes from 'prop-types'
import React, { Component } from 'react'
 import  './styles/Graficos.css'


export class Graficos extends Component {
  static propTypes = {}

  render() {
    return (
      <div>

        <div >
          <iframe className='recuadro'  src="https://charts.mongodb.com/charts-project-0-dlyxq/embed/charts?id=629d32d6-4822-4045-8351-48983aa7f558&maxDataAge=300&theme=light&autoRefresh=true"></iframe>
        </div>

        <hr/>

        <div >
          <iframe className='servidorCentrales' src="https://charts.mongodb.com/charts-project-0-dlyxq/embed/charts?id=1e13d54b-9302-49ca-944f-608082cb6adf&maxDataAge=300&theme=light&autoRefresh=true"></iframe>
        </div>

        <hr/>

        <div >
          <iframe className='servidorCircular' src="https://charts.mongodb.com/charts-project-0-dlyxq/embed/charts?id=62a37112-1269-4bdb-8e1d-4da63ffc4aeb&maxDataAge=300&theme=light&autoRefresh=true"></iframe>
        </div>

        <hr/>

        <div >
        <iframe className='mediaSensoresTemp' src="https://charts.mongodb.com/charts-project-0-dlyxq/embed/charts?id=62b22be2-cbdc-41de-8a7a-ad1b8a0d0c51&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
        </div>


      </div>
        
    )
  }
}

export default Graficos


