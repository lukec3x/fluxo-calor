import { createStore } from 'redux'

const ESTADO_INICIAL = {
  constante: 'K',
  area: 'A',
  fQuente: 'Tq',
  fFrio: 'Tf',
  largura: 'L',
  result: 0,
}

function reducer(state = ESTADO_INICIAL, action) {
  if (action.type === 'CALCULA') {
    // console.log(state, action)
    
    const { result, constante, area, fQuente, fFrio, largura } = action

    return { result, constante, area, fQuente, fFrio, largura }
  }

  // console.log(state, action)  
  return state
}

const store = createStore(reducer)

export default store