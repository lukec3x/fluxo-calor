import React from 'react';

import { connect } from 'react-redux'

import './style.css'

function calc() {
  // console.log(document.getElementById(id).value)

  const constante = parseFloat(document.getElementById('constante').value)
  console.log(isNaN(constante))
  const area = parseFloat(document.getElementById('area').value)
  const fQuente = parseFloat(document.getElementById('fQuente').value)
  const fFrio = parseFloat(document.getElementById('fFrio').value)
  const largura = parseFloat(document.getElementById('largura').value)

  if (isNaN(constante) || isNaN(area) || isNaN(fQuente) || isNaN(fFrio) || isNaN(largura)) {
    return {
      type: '',
    }
  }

  return {
    type: 'CALCULA',
    result: constante * area * ( fQuente - fFrio ) / largura
  }
}

const Inputs = ({ dispatch }) => (
  <div>
    {/* Constante: <input id='constante' onChange={() => dispatch(calc('constante'))} /> <br /> */}
    Área: <input id='area' onChange={() => dispatch(calc())} /> <br />
    Fonte Quente: <input id='fQuente' onChange={() => dispatch(calc())} /> <br />
    Fonte Frio: <input id='fFrio' onChange={() => dispatch(calc())} /> <br />
    Largura: <input id='largura' onChange={() => dispatch(calc())} /> <br />
    Constante: <select id="constante" onChange={() => dispatch(calc())}>
      <option selected value="385">Cobre</option>
      <option value="0.8">Vidro Comum</option>
    </select>
  </div>
)

export default connect()(Inputs)
