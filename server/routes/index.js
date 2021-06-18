/*
Assignment 2 - Authentication  
Created by: Remedios Meneses
SN: 300691712
Submitted on: June 18, 2021
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.DisplayHomePage);

/* GET home page. */
router.get('/home', indexController.DisplayHomePage);

/* GET About Us page. */
router.get('/about', indexController.DisplayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.DisplayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.DisplayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.DisplayContactPage);

/* GET Route for displaying the Login page  */
router.get('/login', indexController.DisplayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.ProcessLoginPage);

/* GET Route for displaying the Register page  */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET Route to perform UserLogout */
router.get('/logout', indexController.PerformLogout);

module.exports = router;
