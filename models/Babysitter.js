const mongoose = require("mongoose");

const BabysitterSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  family: {
    type: mongoose.Types.ObjectId,
    ref: "Family",
  },
  startAt: {
    type: String,
  },
  endAt: {
    type: String,
  },
});

module.exports = mongoose.model("Babysitter", BabysitterSchema);
