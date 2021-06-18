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
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the Login page  */
router.get('/login', indexController.DisplayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.ProcessLoginPage);

/* GET Route for displaying the Register page  */
router.get('/register', indexController.DisplayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.ProcessRegisterPage);

/* GET Route to perform UserLogout */
router.get('/logout', indexController.PerformLogout);

module.exports = router;
