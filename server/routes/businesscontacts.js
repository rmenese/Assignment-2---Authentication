let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our BusinessContacts Model
let Contacts = require('../models/businesscontacts');

/* GET Route for the BusinessContacts List page - READ Operation */
router.get('/', (req, res, next) => {
    Contacts.find((err, contactsList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BusinessContactsList);

            res.render('businesscontactlist', {title: 'Business Contacts', BusinessContactsList: contactsList})
        }
    });
});

module.exports = router;