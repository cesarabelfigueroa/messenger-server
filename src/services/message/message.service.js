// Initializes the `message` service on path `/message`
const createService = require('feathers-nedb');
const createModel = require('../../models/message.model');
const hooks = require('./message.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'message',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/message', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('message');

  service.hooks(hooks);
};
