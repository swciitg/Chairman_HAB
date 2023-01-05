const PublishedConferencePapers = require("../models/publishedConferencePapers");

const factory = require("./handlerFactory");

exports.getPublishedConferencePapers = async (req, res) => {
  try {
    const PublishedConferencePaper = await PublishedConferencePapers.find(
      {}
    ).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        PublishedConferencePaper,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.findPublishedConferencePapers = async (req, res) => {
  try {
    const PublishedConferencePaper = await PublishedConferencePapers.find(
      {}
    ).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        PublishedConferencePaper,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.postPublishedConferencePapers = async (req, res, next) => {
  try {
    var { conferencePapertitle, conferencePapername, conferencePaperBody } =
      req.body;

    const doc = await new PublishedConferencePapers({
      conferencePapertitle,
      conferencePapername,
      conferencePaperBody,
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

exports.editPublishedConferencePapers = factory.updateOne(
  PublishedConferencePapers
);

exports.deletePublishedConferencePapers = factory.deleteOne(
  PublishedConferencePapers
);
