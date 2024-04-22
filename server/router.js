const controllers = require('./controllers');
const mid = require('./middleware');

// Debugging
// console.log('requiresSecure:', typeof mid.requiresSecure); 
// console.log('requiresLogout:', typeof mid.requiresLogout); 
// console.log('Account loginPage:', typeof controllers.Account.loginPage); 

const router = (app) => {

  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  // Game review routes
  app.get('/reviews/:game', mid.requiresLogin, (req, res) => {
    return res.render('gameReviews', { game: req.params.game }); // Logic to display reviews for the game specified by :game
  });


  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);

};

module.exports = router;
