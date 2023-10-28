const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  progress: {
    type: Number,
    default: 0
  },
  lastCompletedSection: {
    type: String,
    default: ''
  },
  quizScores: {
    type: Map,
    of: Number
  }
});

const UserProgress = mongoose.model('UserProgress', userProgressSchema);

module.exports = UserProgress;