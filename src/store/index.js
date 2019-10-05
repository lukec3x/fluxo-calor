import { createStore } from 'redux'

const ESTADO_INICIAL = {
  constante: 'K',
  area: 'A',
  fQuente: 'Tq',
  fFrio: 'Tf',
  comprimento: 'L',
  result: 0,
  
  checado: true,
}

function reducer(state = ESTADO_INICIAL, action) {
  const { result, constante, area, fQuente, fFrio, comprimento, checado } = action

  if (action.type === 'CONSTANTE') {
    return {...state, constante}

  } else if (action.type === 'AREA') {
    return {...state, area}

  } else if (action.type === 'F_QUENTE') {
    return {...state, fQuente}

  } else if (action.type === 'F_FRIO') {
    return {...state, fFrio}

  } else if (action.type === 'comprimento') {
    return {...state, comprimento}

  } else if (action.type === 'CALCULA') {
    // console.log(state, action)
    return { ...state, result, constante, area, fQuente, fFrio, comprimento }

  } else if (action.type === 'CHECAR') {
    // console.log(checado)
    return {...state, checado}
  }

  // console.log(state, action)  
  return state
}

const store = createStore(reducer)

export default store