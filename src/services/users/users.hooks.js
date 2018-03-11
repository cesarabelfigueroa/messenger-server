const { authenticate } = require('@feathersjs/authentication').hooks;



module.exports = {
  before: {
    all: [],
    find: [ authenticate('facebook') ],
    get: [ authenticate('facebook') ],
    create: [  ],
    update: [  authenticate('facebook') ],
    patch: [  authenticate('facebook') ],
    remove: [ authenticate('facebook') ]
  },

  after: {
    all: [ 
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
