const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Master:admin@easycarros-yelqv.mongodb.net/easycarros?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;