const mongoose = require('../database/db');


const UserSchema = new mongoose.Schema({

    id : {
        type : String,
        require : true
    },

    name : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true
    },

    password : {
        type : String,
        require : true,
        select : false
    }

},
    { versionKey : false });

const User = mongoose.model('User', UserSchema);

module.exports = User;