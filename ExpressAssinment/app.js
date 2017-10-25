const express = require('express');
const path = require('path');
const morgan = require('morgan');
const favouritesModel=require('./favourites/favourites.entity.js').favouritesModel;
const createConnection=require('./users/users.schema.js');
const passport = require('passport');
const session = require('express-session');
const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost/favourites");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected to mongoDB");
  
  
  
});
function createApp() {
  const app = express();
  return app;
}

function setupStaticRoutes(app) {
  app.use(express.static(path.resolve(__dirname, '../', 'GoPlaces/dist')));
  return app;
}

function setupMiddlewares(app) {
  const bodyParser = require('body-parser');
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false,
  }));

  return app;
}
function setupRestRoutes(app) {
  app.use('/', require(path.join(__dirname, './favourites')));
  app.use('/',require(path.join(__dirname, './users')));
  app.use((req, res) => {
    const err = new Error('Resource not found');
    err.status = 404;
    return res.status(err.status).json({
      error: err.message,
    });
  });
  app.use((err, req, res) => {
    console.log('Internal error in watch processor: ', err);
    return res.status(err.status || 500).json({
      error: err.message,
    });
  });
  return app;
}
function initializepassport(app){
  app.use(session({secret:'mean'}));
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
  return app;
}
createConnection();
let app = createApp();
app = initializepassport(app);
app = setupStaticRoutes(app);
app = setupMiddlewares(app);
app = setupRestRoutes(app);
app.listen(3000, () => {
  console.log('server running on port 3000');
});
module.exports=app;
