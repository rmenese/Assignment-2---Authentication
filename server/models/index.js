

  let express = require('express');
  let router = express.Router();
  
  let indexController = require('../controllers/index');
  
  /* GET home page. */
  router.get('/', indexController.DisplayHomePage);  
  
  /* GET home page. */
  router.get('/home', indexController.DisplayHomePage);
  
  /* GET Projects page. */
  router.get('/projects', indexController.DisplayProjectsPage);
  
  /* GET Services page. */
  router.get('/services', indexController.DisplayServicesPage);
  
  /* GET About page. */
  router.get('/about', indexController.DisplayAboutPage);
  
  /* GET Contact Us page. */
  router.get('/contact', indexController.DisplayContactPage);
  
  /* GET Route for displaying the Login page  */
  router.get('/login', indexController.DisplayLoginPage);
  
  /* POST Route for processing the Login page */
  router.post('/login', indexController.ProcessLoginPage);
  
  /*GET Route to perform Deletion */
  router.get('/delete', indexController.PerformDelete);
  
  
  module.exports = router;
  