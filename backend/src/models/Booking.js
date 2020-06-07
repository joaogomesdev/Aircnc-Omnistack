const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId, //id do user que criou 
      ref: 'User'
    },
    spot: {
      type: mongoose.Schema.Types.ObjectId, //id do user que criou 
      ref: 'Spot'
    }
  });

module.exports = mongoose.model('Booking' , BookingSchema);