const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  nom: { type: String },
  email: { type: String, unique: true },
  tel: { type: Number },
  
});

module.exports = mongoose.model('User', userSchema);