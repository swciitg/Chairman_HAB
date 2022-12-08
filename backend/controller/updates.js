const Updates = require("../models/updates");

const factory = require("./handlerFactory");

exports.getUpdates = async (req, res) => {
  try {
    const Update = await Updates.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        Update,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.findUpdates = async (req, res) => {
  try {
    const Update = await Updates.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        Update,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.postUpdates = async (req, res, next) => {
  try {
    var { title, description } = req.body;

    const doc = await new Updates({
      title,
      description,
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

exports.editUpdates = factory.updateOne(Updates);

exports.deleteUpdates = factory.deleteOne(Updates);
