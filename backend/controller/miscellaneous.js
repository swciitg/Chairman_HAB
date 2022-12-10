const Miscellaneous = require("../models/miscellaneous");

const factory = require("./handlerFactory");

exports.getMiscellaneous = async (req, res) => {
  try {
    const Misc = await Miscellaneous.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        Misc,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.findMiscellaneous = async (req, res) => {
  try {
    const Misc = await Miscellaneous.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        Misc,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.postMiscellaneous = async (req, res, next) => {
  try {
    var { miscellaneousPostertitle, miscelaneousPostername, miscellaneousPoterBody } = req.body;

    const doc = await new Miscellaneous({
      miscellaneousPostertitle,
      miscelaneousPostername,
      miscellaneousPoterBody,
    }).save();

    res.status(201).json({
      status: "success",
      data: doc,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editMiscellaneous = factory.updateOne(Miscellaneous);

exports.deleteMiscellaneous = factory.deleteOne(Miscellaneous);

