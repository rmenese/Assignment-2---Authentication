

  let express = require('express');
  let router = express.Router();
  let mongoose = require('mongoose');
  
  let jwt = require('jsonwebtoken');
  
  //create a reference to the model
  let Contacts = require('../models/businesscontacts');
  
  module.exports.displayContactList = (req, res, next) => {
      Contacts.find((err, contactList) =>{
          if(err)
          {
              return console.error(err);
          }
          else
          {
              res.render('businesscontacts/list', {title: 'Business Contacts', 
              BusinessContactsList: contactsList,
              displayName: req.user ? req.user.displayName : ''});
          }
      });
  }
  
  module.exports.displayAddPage = (req, res, next) =>{
      res.render('businesscontactlist/add', {title: 'Add Businesscontactlist',
      displayName: req.user ? req.user.displayName : ''});
  }
  
  module.exports.processAddPage = (req, res, next) => {
    let newBusinesscontactlist = newBusinesscontactlist({
        "contactname": req.body.name,
        "contactnumber": req.body.contactname,
        "email": req.body.email
    });

    Businesscontactlist.create(newBusinesscontactlist, (err, Businesscontactlist) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the businesscontactlist
            res.redirect('/contacts-list');
        }
    });
}
  
  module.exports.displayEditPage = (req, res, next) =>{
    let id = req.params.id;

    Businesscontactlist.findById(id, (err, contactsToEdit) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('businesscontactlist/edit', {title: 'Edit Businesscontactlist', businesscontactlist: contactsToEdit})
        }
    });
}
  
  module.exports.processEditPage = (req, res, next) =>{
    let id = req.params.id

    let updatedBusinesscontaclist = Businesscontactlist({
        "_id": id,
        "contactname": req.body.name,
        "contactnumber": req.body.contactname,
        "email": req.body.email
    });

    Businesscontactlist.updateOne({_id: id}, updatedBusinesscontaclist, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the businesscontactlist
            res.redirect('/contacts-list');

        }
    });
}
  
  module.exports.performDelete = (req, res, next) =>{
    let id = req.params.id;

    Businesscontactlist.remove({_id: id}, (err) =>{
        if(err)
       {
           console.log(err);
           res.end(err);
       }
       else
       {
            //refresh the businesscontactlist
            res.redirect('/contacts-list');
       }
    });
  }
  
  