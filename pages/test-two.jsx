import React from 'react';
import ReactDOM from 'react-dom';
require('newrelic');
import TestTwo from './test-two.view';

ReactDOM.render(<TestTwo {...window.__APP_INITIAL_STATE__} />,
  document.getElementById('root')
)