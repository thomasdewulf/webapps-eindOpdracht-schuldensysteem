//Stelt zowel een schuld als een vordering voor. Bij gebrek aan een betere naam gekozen voor 'Debt'.

var mongoose = require('mongoose');

var DebtSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    dateEntered: Date,
    dateSpent: Date,
    imageUrl: String
});

mongoose.model('Debt', DebtSchema);