const Survey = require("../models/product");
const funsPost = async (req, res) => {
  // console.log(req.body);
  try {
    const newSurvey = new Survey(req.body);
    newSurvey.save();
    res.status(201).json({ feedback });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getAllResponses = async (req, res) => {
  try {
    const found = await Survey.find({});
    res.status(200).json(found);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

module.exports = { funsPost, getAllResponses };
