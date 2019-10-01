import React from 'react';
import { connect } from 'react-redux'

import './style.css'

const Result = ({ state }) => {
  const { result, constante, area, fQuente, fFrio, largura } = state

  return (
    <div>
      <div id='flex'>
        
        <div id='linha' style={{ width: 'auto' }}>
          <p id='first'>{constante} * {area} ({fQuente} - {fFrio})</p>
        </div>
        <p>{largura}</p>

      </div>
      <span>Φ</span> Calor: <p style={{display: 'inline'}}>{result}</p> 
    </div>
  )
}

export default connect(state => ({ state }))(Result)
