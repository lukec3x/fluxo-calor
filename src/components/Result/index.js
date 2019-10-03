import React from 'react';
import { connect } from 'react-redux'

import './style.css'

function checar() {
  const chbx = document.getElementById('flutuante')

  if (chbx.checked) {
    return {
      type: 'CHECAR',
      checado: true,
    }
  }

  return {
    type: 'CHECAR',
    checado: false,
  }
}

const Result = ({ state, dispatch }) => {
  let { result, constante, area, fQuente, fFrio, largura, checado } = state

  if (checado) {
    result = result.toFixed(2)
  }

  return (
    <div>
      <div id='flex'>
        
        <div id='linha' style={{ width: 'auto' }}>
          <p id='first'>{constante} * {area} ({fQuente} - {fFrio})</p>
        </div>
        <p>{largura}</p>

      </div>
      <span>Φ</span> Calor: <p style={{display: 'inline'}}>{result}</p> 
      <p><input type="checkbox" id="flutuante" checked={checado} onChange={() => dispatch(checar()) }/> Formatar resultado</p>
    </div>
  )
}

export default connect(state => ({ state }))(Result)
