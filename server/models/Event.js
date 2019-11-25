var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bookId: { type: String, required: true },
  bookState: {
    type: Object,
    required: true
  },
  timestamp: { type: String, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
