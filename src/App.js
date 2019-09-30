import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Inputs from './components/Inputs'
import Result from './components/Result'

import store from './store'

export default class App extends Component {
  componentDidMount() {
    document.getElementById('area').focus()
  }

  render () {
    return (
      <div className="App">
        <Provider store={store}>
          <Inputs />
          <Result />
        </Provider>
      </div>
    )
  }
}

// const App = () => {
//   return (
//     <div className="App">
//       <Provider store={store}>
//         <Inputs />
//         <Result />
//       </Provider>
//     </div>
//   )
// }

// export default App;
