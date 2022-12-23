const ExperimentalFacilities = require("../models/experimentalFacilities");
// const dirname = require("../../dirname");
const fs = require("fs");

exports.getExperimentalFacilities = async (req, res) => {
  try {
    const { grp } = req.params;
    const ExperimentalFacilitiesData = await ExperimentalFacilities.find({
      grp: grp,
    }).sort("priority_number");
    return res
      .status(200)
      .json({ status: "success", data: { ExperimentalFacilitiesData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getExperimentalFacilityImage = async (req, res) => {
  try {
    const { id } = req.params;
    const ExpeimentalFacility = await ExperimentalFacilities.findById(id);
    if (ExpeimentalFacility) {
      const ImagePath = `${__dirname}/../../uploads/grp/${ExpeimentalFacility.experimentalFacilitiesImage}`;
      fs.readFile(ImagePath, (err, data) => {
        res.contentType("image/jpeg");
        return res.send(data);
      });
    } else {
      return res
        .status(424)
        .json({ status: "Failed", message: "Request failed" });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.postExperimentalFacility = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(424)
        .json({ status: "Failed", message: "No File Provided" });
    }
    const { grp } = req.params;
    const { experimentalFacilitiesTitle } = req.body;
    const experimentalFacilitiesImage = req.file.filename;
    const newExperimentalFacilitiesData = new ExperimentalFacilities({
      experimentalFacilitiesTitle,
      experimentalFacilitiesImage,
    });
    const ExperimentalFacilitiesData =
      await newExperimentalFacilitiesData.save();
    return res
      .status(200)
      .json({ status: "success", data: { ExperimentalFacilitiesData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editExperimentalFacility = async (req, res) => {
  try {
    const { grp, id } = req.params;
    const ExperimentalFacilitiesData = await ExperimentalFacilities.findById(id);
    const { experimentalFacilitiesTitle } = req.body;
    let experimentalFacilitiesImage;
    let data = { experimentalFacilitiesTitle, grp };
    if (req.file) {
      experimentalFacilitiesImage = req.file.filename;
      data = { experimentalFacilitiesTitle, grp };
    }
    const UpdatedExperimentalFacilityData =
      await ExperimentalFacilities.findByIdAndUpdate(id, data);
    if (req.file) {
      fs.unlinkSync(
        `${__dirname}/../../uploads/grp/${ExperimentalFacilitiesData.experimentalFacilitiesImage}`
      );
    }
    return res
      .status(200)
      .json({ status: "success", data: { UpdatedExperimentalFacilityData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteExperimentalFacility = async (req, res) => {
  try {
    const { id } = req.params;
    const ExperimentalFacilityData = await ExperimentalFacilities.findById(id);
    const DeletedExperimentalFacilityData =
      await ExperimentalFacilities.findByIdAndDelete(id);
    fs.unlinkSync(
      `${__dirname}/../../uploads/grp/${ExperimentalFacility.experimentalFacilitiesImage}`
    );
    return res
      .status(200)
      .json({ status: "success", data: { DeletedExperimentalFacilityData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};
