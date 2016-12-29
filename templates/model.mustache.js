'use strict';

import Page from '../page.model';
const PAGE_ID = 'a contentful id';

class {{ name }} extends Page {
  constructor() {
    super(PAGE_ID); // you may need course and location args tpp
  }

  get dataSources() {
    return [this.contentful.getInfoPageById(PAGE_ID)];
  }
}

export default {{ name }};
