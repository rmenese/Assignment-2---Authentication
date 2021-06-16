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