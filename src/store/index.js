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
  const { result, constante, area, fQuente, fFrio, largura } = action

  if (action.type === 'CONSTANTE') {
    return {...state, constante}

  } else if (action.type === 'AREA') {
    return {...state, area}

  } else if (action.type === 'F_QUENTE') {
    return {...state, fQuente}

  } else if (action.type === 'F_FRIO') {
    return {...state, fFrio}

  } else if (action.type === 'LARGURA') {
    return {...state, largura}

  } else if (action.type === 'CALCULA') {
    // console.log(state, action)
    return { result, constante, area, fQuente, fFrio, largura }
  }

  // console.log(state, action)  
  return state
}

const store = createStore(reducer)

export default store