let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let Schema = mongoose.Schema; // alias
//require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
    },
    /*
    password: 
    {
        type: String
        default: '',
        trim: true,
        required: 'password is required'
    },
    */
    {
        email: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
        },
    },
    {
        displayName: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'display name is required'
        },
    },
    {
        created:
        {
            type: Date,
            default: Date.now()
        },
    },
    {    
        updated:
        {
            type: Date,
            default: Date.now()
        },
    },

    {   
        collection: 'users'
    }
);

// Configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

UserSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.Model('User', User);