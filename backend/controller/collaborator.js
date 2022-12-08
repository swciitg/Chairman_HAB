const Collaborators = require("../models/collaborators");

const factory = require("./handlerFactory");

exports.getCollaborators = async (req, res) => {
  try {
    const Collaborator = await Collaborators.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        Collaborator,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.findCollaborators = async (req, res) => {
  try {
    const Collaborator = await Collaborators.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        Collaborator,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.postCollaborators = async (req, res, next) => {
  try {
    var { collaboratorName, designation, universityName, countryName } =
      req.body;

    const doc = await new Collaborators({
      collaboratorName,
      designation,
      universityName,
      countryName,
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

exports.editCollaborators = factory.updateOne(Collaborators);

exports.deleteCollaborators = factory.deleteOne(Collaborators);
