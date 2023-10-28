const mongoose = require('mongoose');

const userSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  sessionStart: {
    type: Date,
    default: Date.now
  },
  sessionEnd: {
    type: Date
  },
  currentProgress: {
    type: String,
    default: 'Exploration'
  }
});

const UserSession = mongoose.model('UserSession', userSessionSchema);

module.exports = UserSession;