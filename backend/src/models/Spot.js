const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String, 
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId, //id do user que criou 
      ref: 'User'
    }
});

module.exports = mongoose.model('Spot' , SpotSchema);