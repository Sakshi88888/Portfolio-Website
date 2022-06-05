require('dotenv').config();

const mongoose = require('mongoose');

function connectDB(){

    mongoose.connect("mongodb+srv://WT_HA:lCuDzNBnX3OyU08A@cluster0.4rgbk.mongodb.net/portfolio?retryWrites=true&w=majority", {useNewUrlParser: true});

    const connection = mongoose.connection;

    connection.once('open',()=>{


        console.log('Database Connected.');
    }).on('error', function (err) {

        console.log('connection failed');
    
});}

module.exports = connectDB ; 



