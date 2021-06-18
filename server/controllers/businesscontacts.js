

  let express = require('express');
  let router = express.Router();
  let mongoose = require('mongoose');
  
  let jwt = require('jsonwebtoken');
  
  //create a reference to the model
  let Contacts = require('../models/businesscontacts');
  
  module.exports.displayContactList = (req, res, next) => {
      Contacts.find((err, contactsList) =>{
          if(err)
          {
              return console.error(err);
          }
          else
          {
              res.render('business/list', {title: 'Business Contacts', 
              BusinessContactsList: contactsList,
              displayName: req.user ? req.user.displayName : ''});
          }
      });
  }
  
  module.exports.displayAddPage = (req, res, next) =>{
      res.render('business/add', {title: 'Add Businesscontactlist',
      displayName: req.user ? req.user.displayName : ''});
  }
  
  module.exports.processAddPage = (req, res, next) => {
    let newBusinesscontactlist = Contacts({
        "contactname": req.body.name,
        "contactnumber": req.body.contactname,
        "email": req.body.email
    });

    Contacts.create(newBusinesscontactlist, (err, businesscontactlist) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the businesscontactlist
            res.redirect('/business-list');
        }
    });
}
  
  module.exports.displayEditPage = (req, res, next) =>{
    let id = req.params.id;

    Contacts.findById(id, (err, contactsToEdit) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business/edit', {title: 'Edit Businesscontactlist', businesscontactlist: contactsToEdit})
        }
    });
}
  
  module.exports.processEditPage = (req, res, next) =>{
    let id = req.params.id

    let updatedBusinesscontaclist =Contacts({
        "_id": id,
        "contactname": req.body.name,
        "contactnumber": req.body.contactname,
        "email": req.body.email
    });

    Contacts.updateOne({_id: id}, updatedBusinesscontaclist, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the businesscontactlist
            res.redirect('/business-list');

        }
    });
}
  
  module.exports.performDelete = (req, res, next) =>{
    let id = req.params.id;

    Contacts.remove({_id: id}, (err) =>{
        if(err)
       {
           console.log(err);
           res.end(err);
       }
       else
       {
            //refresh the businesscontactlist
            res.redirect('/business-list');
       }
    });
  }
  
  