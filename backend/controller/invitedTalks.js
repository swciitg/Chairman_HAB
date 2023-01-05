const InvitedTalks = require("../models/invitedTalks");

const factory = require("./handlerFactory");

exports.getInvitedTalks = async (req, res) => {
  try {
    const InvitedTalk = await InvitedTalks.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        InvitedTalk,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.findInvitedTalks = async (req, res) => {
  try {
    const InvitedTalk = await InvitedTalks.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        InvitedTalk,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.postInvitedTalks = async (req, res, next) => {
  try {
    var { invitedTalktitle, invitedTalkname, invitedTalkBody } = req.body;

    const doc = await new InvitedTalks({
      invitedTalktitle,
      invitedTalkname,
      invitedTalkBody,
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

exports.editInvitedTalks = factory.updateOne(InvitedTalks);

exports.deleteInvitedTalks = factory.deleteOne(InvitedTalks);
