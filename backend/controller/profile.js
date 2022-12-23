const Profile = require("../models/profile");
// const dirname = require("../../dirname");
const fs = require("fs");

exports.getProfile = async (req, res) => {
  try {
    const { grp } = req.params;
    const ProfileData = await Profile.find({ grp: grp }).sort(
      "priority_number"
    );
    return res.status(200).json({ status: "success", data: { ProfileData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.postProfile = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(424)
        .json({ status: "Failed", message: "No File Provided" });
    }
    const { grp } = req.params;
    const {
      proffessorName,
      proffessorDesignation,
      proffessorDepartment,
      instituteName,
      address,
      labPhone,
      officePhone,
      labEmail,
      personalEmail,
      officeEmail,
      OrcidID,
      ReasearchID,
      scopusAuthorID,
      googleScholarID,
    } = req.body;
    const imagePath = req.file.filename;
    const newProfileData = new Profile({
      proffessorName,
      proffessorDesignation,
      proffessorDepartment,
      instituteName,
      address,
      labPhone,
      officePhone,
      labEmail,
      officeEmail,
      personalEmail,
      OrcidID,
      ReasearchID,
      scopusAuthorID,
      googleScholarID,
      imagePath,
    });
    const ProfileData = await newProfileData.save();
    return res.status(200).json({ status: "success", data: { ProfileData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editProfile = async (req, res) => {
  try {
    const { grp, id } = req.params;
    const ProfileData = await Profile.findById(id);
    const {
      proffessorName,
      proffessorDesignation,
      proffessorDepartment,
      instituteName,
      address,
      labPhone,
      officePhone,
      labEmail,
      officeEmail,
      personalEmail,
      OrcidID,
      ReasearchID,
      scopusAuthorID,
      googleScholarID,
    } = req.body;
    let imagePath;
    let data = {
      proffessorName,
      proffessorDesignation,
      proffessorDepartment,
      instituteName,
      address,
      labPhone,
      officePhone,
      labEmail,
      personalEmail,
      OrcidID,
      ReasearchID,
      scopusAuthorID,
      googleScholarID,
      grp,
    };
    if (req.file) {
      imagePath = req.file.filename;
      data = {
        proffessorName,
        proffessorDesignation,
        proffessorDepartment,
        instituteName,
        address,
        labPhone,
        officePhone,
        labEmail,
        officeEmail,
        personalEmail,
        OrcidID,
        ReasearchID,
        scopusAuthorID,
        googleScholarID,
        grp,
      };
    }
    const UpdatedProfileData = await Profile.findByIdAndUpdate(id, data);
    if (req.file) {
      fs.unlinkSync(`${__dirname}/../../uploads/grp/${ProfileData.imagePath}`);
    }
    return res
      .status(200)
      .json({ status: "success", data: { UpdatedProfileData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const ProfileData = await Profile.findById(id);
    const DeletedProfileData = await Profile.findByIdAndDelete(id);
    fs.unlinkSync(`${__dirname}/../../uploads/grp/${ProfileData.imagePath}`);
    return res
      .status(200)
      .json({ status: "success", data: { DeletedProfileData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};
