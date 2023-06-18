const mongoose = require("mongoose");

const FamilySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  rates: [
    {
      start: {
        type: String,
        required: true,
      },
      end: {
        type: String,
        required: true,
      },

      hoursRate: {
        type: Number,

        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Family", FamilySchema);
