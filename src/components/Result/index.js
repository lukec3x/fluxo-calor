import React from 'react';

import { connect } from 'react-redux'

const Result = ({ result }) => (
  <div>
    Fluxo de Calor: <input name='result' value={result} readOnly={true} />
  </div>
)

export default connect(state => ({ result: state.result }))(Result)
