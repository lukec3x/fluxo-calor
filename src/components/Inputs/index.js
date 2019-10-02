import React from 'react';
import { connect } from 'react-redux'

import './style.css'

// function calc() { // passa o valor do estado desse component para o redux
//   const constante = parseFloat(document.getElementById('constante').value)
//   const area = parseFloat(document.getElementById('area').value)
//   const fQuente = parseFloat(document.getElementById('fQuente').value)
//   const fFrio = parseFloat(document.getElementById('fFrio').value)
//   const largura = parseFloat(document.getElementById('largura').value)

//   if (isNaN(constante) || isNaN(area) || isNaN(fQuente) || isNaN(fFrio) || isNaN(largura)) {
//     return {
//       type: '',
//     }
//   }

//   return {
//     type: 'CALCULA',
//     result: constante * area * ( fQuente - fFrio ) / largura,
//     constante, 
//     area, 
//     fQuente, 
//     fFrio, 
//     largura,
//   }
// }


function calc(tipo) { // passa o valor do estado desse component para o redux
  const constante = parseFloat(document.getElementById('constante').value)
  const area = parseFloat(document.getElementById('area').value)
  const fQuente = parseFloat(document.getElementById('fQuente').value)
  const fFrio = parseFloat(document.getElementById('fFrio').value)
  const largura = parseFloat(document.getElementById('largura').value)

  if (isNaN(constante) || isNaN(area) || isNaN(fQuente) || isNaN(fFrio) || isNaN(largura)) {
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
    } else if (tipo === 'largura') {
      return {
        type: 'LARGURA',
        largura,
      }
    }
  }

  return {
    type: 'CALCULA',
    result: constante * area * ( fQuente - fFrio ) / largura,
    constante, 
    area, 
    fQuente, 
    fFrio, 
    largura,
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
    Área: <input id='area' onChange={() => dispatch(calc('area'))} /> <br />
    Fonte Quente: <input id='fQuente' onChange={() => dispatch(calc('quente'))} /> <br />
    Fonte Frio: <input id='fFrio' onChange={() => dispatch(calc('frio'))} /> <br />
    Largura: <input id='largura' onChange={() => dispatch(calc('largura'))} /> <br />
  </div>
)

export default connect()(Inputs)
