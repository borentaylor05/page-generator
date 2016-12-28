'use strict';

import Page from '../page.model';

class {{ name }} extends Page {
  constructor(location) {
    super(_getLocationContentfulId(location)); // you may need course and location args tpp
  }
}

export default {{ name }};

function _getLocationContentfulId(location) {
  return; // a contentful id for this page
}