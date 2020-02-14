const mongoose = require('mongoose');

const TehtavaSchema = mongoose.Schema(
  {
    kurssi: String,
    tehtava: String,
    deadline: String
  },
  { collection: 'tehtava' }
);

module.exports = mongoose.model('tehtava', TehtavaSchema);
