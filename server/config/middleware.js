
    // helpers     = require('./helpers.js'); // our custom middleware


module.exports = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations
  // var userRouter = express.Router();
  // var linkRouter = express.Router();


  //app.use(express.static(__dirname + '/../../client')); // TODO: SERVE STATIC CODE HERE!

  //app.use('/api/users', userRouter); // use user router for all user request

  // authentication middleware used to decode token and made available on the request
  //app.use('/api/links', helpers.decode);
  // app.use('/api/links', linkRouter); // user link router for link request
  // app.use(helpers.errorLogger);
  // app.use(helpers.errorHandler);

  // inject our routers into their respective route files
  // require('../users/userRoutes.js')(userRouter);
  // require('../links/linkRoutes.js')(linkRouter);
};
