const assert = require('assert');
const app = require('../../src/app');

describe('\'actual\' service', () => {
  it('registered the service', () => {
    const service = app.service('actual');

    assert.ok(service, 'Registered the service');
  });
});
