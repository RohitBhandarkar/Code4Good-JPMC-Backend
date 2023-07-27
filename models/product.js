const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    PrimaryReason:{
      type: String,
      required: true,
    },
    FoundTheInformation:{
      type: String,
      required: true,
    },
    AwareAboutVolunteer:{
      type: String,
      required: true,
    },
    WhyNotVolunteering:{
      type: String,
      required: true,
    },
    AwareAboutDonation:{
      type: String,
      required: true,
    },
    WhyNotDonating:{
      type: String,
      required: true,
    },
    HearAboutBhumi:{
      type: String,
      required: true,
    },
    RateInformation:{
      type: String,
      required: true,
    },
    RevisitBhumi:{
      type: String,
      required: true,
    },
    feedback:{
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Survey", surveySchema);
