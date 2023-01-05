const PastMembers = require("../models/pastMember");

const factory = require("./handlerFactory");

exports.getPastMembers = async (req, res) => {
  try {
    const PastMember = await PastMembers.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        PastMember,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.findPastMembers = async (req, res) => {
  try {
    const PastMember = await PastMembers.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        PastMember,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.postPastMembers = async (req, res, next) => {
  try {
    var { pastMemberName, qualificationOfStudent, yearOfProjectCompletion } =
      req.body;

    const doc = await new PastMembers({
      pastMemberName,
      qualificationOfStudent,
      yearOfProjectCompletion,
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

exports.editPastMembers = factory.updateOne(PastMembers);

exports.deletePastMembers = factory.deleteOne(PastMembers);
