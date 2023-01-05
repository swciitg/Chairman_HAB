const Projects = require("../models/projects");

const factory = require("./handlerFactory");

exports.getProjects = async (req, res) => {
  try {
    const Project = await Projects.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        Project,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.findProjects = async (req, res) => {
  try {
    const Project = await Projects.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        Project,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.postProjects = async (req, res, next) => {
  try {
    var {
      serialNumber,
      projectTitle,
      fundingAgencyName,
      duration,
      investigators,
    } = req.body;

    const doc = await new Projects({
      serialNumber,
      projectTitle,
      fundingAgencyName,
      duration,
      investigators,
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

exports.editProjects = factory.updateOne(Projects);

exports.deleteProjects = factory.deleteOne(Projects);
