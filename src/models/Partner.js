const mongoose = require('../database/db');


const PartnerSchema = new mongoose.Schema({

    id: {
        type : String,
        require : true
    },

    name: {
        type : String,
        require : true,
    },
    
    location : {
        type : Object,
        name : String,
        addres : String,
        state : String,
        country : String,
        lat : String,
        long : String
    },

    loc : {
        type : Object,
        cooedinates: Array
    },

    availableServices : {
        type : Array
    }

},
    { versionKey : false });

const Partners = mongoose.model('Partner', PartnerSchema);

module.exports = Partners;