import React from 'react';
import { Provider } from 'react-redux'

import Inputs from './components/Inputs'
import Result from './components/Result'

import store from './store'

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Inputs />
        <Result />
      </Provider>
    </div>
  );
}

export default App;
