'use strict';

import Page from '../page.model';

class TestTwo extends Page {
  constructor(location) {
    super(_getLocationContentfulId(location)); // you may need course and location args tpp
  }
}

export default TestTwo;

function _getLocationContentfulId(location) {
  return; // a contentful id for this page
}