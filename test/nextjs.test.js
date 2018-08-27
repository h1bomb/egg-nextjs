'use strict';

const mock = require('egg-mock');

describe('test/nextjs.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/nextjs-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nextjs')
      .expect(200);
  });

  it('should GET /next', () => {
    app.httpRequest()
      .get('/next')
      .expect(200);
  });
});
