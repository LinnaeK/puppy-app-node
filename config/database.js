var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/puppies', { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify: false } );
const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Mongoose connected to ${db.host}:${db.port}`);
});

module.exports = mongoose;