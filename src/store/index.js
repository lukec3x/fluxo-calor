import { createStore } from 'redux'

const ESTADO_INICIAL = {
  result: 0,
}

function reducer(state = ESTADO_INICIAL, action) {
  if (action.type === 'CALCULA') {
    // console.log(state, action)
    return { result: action.result }
  }

  // console.log(state, action)  
  return state
}

const store = createStore(reducer)

export default store