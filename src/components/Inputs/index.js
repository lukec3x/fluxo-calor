import React from 'react';
import { connect } from 'react-redux'

import './style.css'

// function calc() { // passa o valor do estado desse component para o redux
//   const constante = parseFloat(document.getElementById('constante').value)
//   const area = parseFloat(document.getElementById('area').value)
//   const fQuente = parseFloat(document.getElementById('fQuente').value)
//   const fFrio = parseFloat(document.getElementById('fFrio').value)
//   const comprimento = parseFloat(document.getElementById('comprimento').value)

//   if (isNaN(constante) || isNaN(area) || isNaN(fQuente) || isNaN(fFrio) || isNaN(comprimento)) {
//     return {
//       type: '',
//     }
//   }

//   return {
//     type: 'CALCULA',
//     result: constante * area * ( fQuente - fFrio ) / comprimento,
//     constante, 
//     area, 
//     fQuente, 
//     fFrio, 
//     comprimento,
//   }
// }


function calc(tipo) { // passa o valor do estado desse component para o redux
  const constante = parseFloat(document.getElementById('constante').value)
  const area = parseFloat(document.getElementById('area').value)
  const fQuente = parseFloat(document.getElementById('fQuente').value)
  const fFrio = parseFloat(document.getElementById('fFrio').value)
  const comprimento = parseFloat(document.getElementById('comprimento').value)

  if (isNaN(constante) || isNaN(area) || isNaN(fQuente) || isNaN(fFrio) || isNaN(comprimento)) {
    if (tipo === 'const') {
      return {
        type: 'CONSTANTE',
        constante,
      }
    } else if (tipo === 'area') {
      return {
        type: 'AREA',
        area,
      }
    } else if (tipo === 'quente') {
      return {
        type: 'F_QUENTE',
        fQuente,
      }
    } else if (tipo === 'frio') {
      return {
        type: 'F_FRIO',
        fFrio,
      }
    } else if (tipo === 'comprimento') {
      return {
        type: 'comprimento',
        comprimento,
      }
    }
  }

  return {
    type: 'CALCULA',
    result: constante * area * ( fQuente - fFrio ) / comprimento,
    constante, 
    area, 
    fQuente, 
    fFrio, 
    comprimento,
  }
}

const Inputs = ({ dispatch }) => (
  <div>
    {/* Constante: <input id='constante' onChange={() => dispatch(calc('constante'))} /> <br /> */}
    Constante: <select id="constante" defaultValue={'default'} onChange={() => dispatch(calc('const'))}>
      <option value="default"></option>
      <option value="385">Cobre</option>
      <option value="0.8">Vidro Comum</option>
    </select> <br/>
    Área: <input type='number' id='area' onChange={() => dispatch(calc('area'))} /> <br />
    Fonte Quente: <input type='number' id='fQuente' onChange={() => dispatch(calc('quente'))} /> <br />
    Fonte Frio: <input type='number' id='fFrio' onChange={() => dispatch(calc('frio'))} /> <br />
    Comprimento: <input type='number' id='comprimento' onChange={() => dispatch(calc('comprimento'))} /> <br />
  </div>
)

export default connect()(Inputs)
