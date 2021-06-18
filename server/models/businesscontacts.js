/*File name : businesscontacts.js
  Author's name : Remedios Meneses
  Student ID : 300691712
  Web site name : RM
  date : June 18, 2021 */

let mongoose = require('mongoose');

//create a model class
let businesscontactsModel = mongoose.Schema({
    contactname: String,
    contactnumber: String,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contacts', businesscontactsModel);


