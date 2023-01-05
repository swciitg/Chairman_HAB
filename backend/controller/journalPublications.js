const JournalPublications = require("../models/journalPublications");

const factory = require("./handlerFactory");

exports.getJournalPublications = async (req, res) => {
  try {
    const JournalPublication = await JournalPublications.find({}).sort(
      "-creation"
    );

    res.status(200).json({
      status: "success",
      data: {
        JournalPublication,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.findJournalPublications = async (req, res) => {
  try {
    const JournalPublication = await JournalPublications.find({}).sort(
      "-creation"
    );

    res.status(200).json({
      status: "success",
      data: {
        JournalPublication,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.postJournalPublications = async (req, res, next) => {
  try {
    var { journaltitle, journalname, journalBody } = req.body;

    const doc = await new JournalPublications({
      journaltitle,
      journalname,
      journalBody,
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

exports.editJournalPublications = factory.updateOne(JournalPublications);

exports.deleteJournalPublications = factory.deleteOne(JournalPublications);

