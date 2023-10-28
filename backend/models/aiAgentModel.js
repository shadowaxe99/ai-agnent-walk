const mongoose = require('mongoose');

const aiAgentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tasks: {
    type: [String],
    required: true
  },
  responses: {
    type: Map,
    of: String,
    required: true
  }
});

const aiAgentModel = mongoose.model('aiAgent', aiAgentSchema);

module.exports = aiAgentModel;