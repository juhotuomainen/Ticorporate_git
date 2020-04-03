const mongoose = require('mongoose');

const KalenteriMerkinta = mongoose.Schema(
  {
    Subject: String,
    Id: Number,
    StartTime: Date,
    EndTime: Date,
    IsAllDay: Boolean,
    Description: String,
    user: String
  },
  { collection: 'ScheduleData' }
);
module.exports = mongoose.model('ScheduleData', KalenteriMerkinta);
