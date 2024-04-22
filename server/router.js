const controllers = require('./controllers');
const mid = require('./middleware');

// Debugging
// console.log('requiresSecure:', typeof mid.requiresSecure); 
// console.log('requiresLogout:', typeof mid.requiresLogout); 
// console.log('Account loginPage:', typeof controllers.Account.loginPage); 

const router = (app) => {
  app.get('/getDomos', mid.requiresLogin, controllers.Domo.getDomos);

  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  app.get('/maker', mid.requiresLogin, controllers.Domo.makerPage);
  app.post('/maker', mid.requiresLogin, controllers.Domo.makeDomo);

  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);

  app.delete('/deleteDomo', mid.requiresLogin, controllers.Domo.deleteDomo);

};

module.exports = router;
