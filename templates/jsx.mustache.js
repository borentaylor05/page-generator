import React from 'react';
import ReactDOM from 'react-dom';
require('newrelic');
import {{ name }} from './{{ fileName }}.view';

ReactDOM.render(<{{ name }} {...window.__APP_INITIAL_STATE__} />,
  document.getElementById('root')
)