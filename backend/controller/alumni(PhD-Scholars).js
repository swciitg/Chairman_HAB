const AlumniProfile = require("../models/alumni(PhD-Scholars)");
// const dirname = require("../../dirname");
const fs = require("fs");

exports.getAlumniProfile = async (req, res) => {
  try {
    const { grp } = req.params;
    const AlumniProfileData = await AlumniProfile.find({ grp: grp }).sort(
      "priority_number"
    );
    return res.status(200).json({ status: "Success", data: AlumniProfileData });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getOneAlumniImage = async (req, res) => {
  try {
    const { id } = req.params;
    const Alumni = await AlumniProfile.findById(id);
    if (Alumni) {
      const ImagePath = `${__dirname}/../../uploads/grp/${Alumni.imagePath}`;
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

exports.postAlumni = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(424)
        .json({ status: "Failed", message: "No File Provided" });
    }
    const { grp } = req.params;
    const {
      alumniName,
      designation,
      yearOfCompletion,
      nameOfInstitution,
      email,
      phone,
    } = req.body;
    const imagePath = req.file.filename;
    const newAlumniProfileData = new AlumniProfile({
      alumniName,
      designation,
      yearOfCompletion,
      nameOfInstitution,
      email,
      phone,
      imagePath,
    });
    const AlumniData = await newAlumniProfileData.save();
    return res.status(200).json({ status: "Success", data: AlumniData });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editAlumni = async (req, res) => {
  try {
    const { grp, id } = req.params;
    const AlumniProfileData = await AlumniProfile.findById(id);
    const {
      alumniName,
      designation,
      yearOfCompletion,
      nameOfInstitution,
      email,
      phone,
    } = req.body;
    let imagePath;
    let data = {
      alumniName,
      designation,
      yearOfCompletion,
      nameOfInstitution,
      email,
      phone,
      grp,
    };
    if (req.file) {
      imagePath = req.file.filename;
      data = {
        alumniName,
        designation,
        yearOfCompletion,
        nameOfInstitution,
        email,
        phone,
        grp,
      };
    }
    const UpdatedAlumniProfileData = await GroupMembers.findByIdAndUpdate(
      id,
      data
    );
    if (req.file) {
      fs.unlinkSync(
        `${__dirname}/../../uploads/grp/${AlumniProfileData.imagePath}`
      );
    }
    return res
      .status(200)
      .json({ status: "Success", data: UpdatedAlumniProfileData });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteAlumniProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const AlumniData = await AlumniProfile.findById(id);
    const DeletedAlumniData = await AlumniProfile.findByIdAndDelete(id);
    fs.unlinkSync(`${__dirname}/../../uploads/grp/${AlumniData.imagePath}`);
    return res.status(200).json({ status: "Success", data: DeletedAlumniData });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};
