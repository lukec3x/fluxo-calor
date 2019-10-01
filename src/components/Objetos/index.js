import React from 'react'
import { connect } from 'react-redux'

import './style.css'

const Objetos = ({ state }) => {

  const { fQuente, fFrio, constante, largura, area } = state

  var cor
  if (constante === 385) {
    cor = 'chocolate'
  } else if (constante === 0.8) {
    cor = 'lightgray'
  } else {
    cor = 'white'
  }

  var diamentro = (Math.pow(area/Math.PI, 0.5)) *2
  console.log(diamentro)

  return (
    <div id="obj" style={{ gridTemplateColumns: `102px ${largura}px 102px` }}>
    <div className='beq' id='fq'>
      <div style={{ height: fQuente + '%' }}></div>
    </div>
    <div id="barra" style={{ backgroundColor: cor, width: largura +'px', height: diamentro +'px' }}></div>
    <div className='beq' id="ff">
    <div style={{ height: fFrio + '%' }}></div>
    </div>
    </div>
  )
}

export default connect(state => ({ state }))(Objetos)