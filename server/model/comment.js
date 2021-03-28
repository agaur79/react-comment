const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, default: null },
  body: { type: String, default: null },
  postId: { type: Number, default: 0 },
}, {
  timestamps: true,
});

module.exports = mongoose.model('comment', commentSchema);
