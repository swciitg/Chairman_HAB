const GroupMembers = require("../models/homePageImage");
// const dirname = require("../../dirname");
const fs = require("fs");
const HomepageImage = require("../models/homePageImage");

exports.getHomePageImage = async (req, res) => {
  try {
    const { grp } = req.params;
    const Data = await HomepageImage.find({ grp: grp })
    return res
      .status(200)
      .json({ status: "success", data: { Data } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getOneHomePageImage = async (req, res) => {
  try {
    const { id } = req.params;
    const Member = await HomepageImage.findById(id);
    if (Member) {
      const ImagePath = `${__dirname}/../../uploads/grp/${Member.imagePath}`;
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

exports.postHomePageImage = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(424)
        .json({ status: "Failed", message: "No File Provided" });
    }
    const { grp } = req.params;
    const {
        image
      } = req.body;
    const imagePath = req.file.filename;
    const newHomePageImageData = new HomepageImage({
        image,
      imagePath,
    });
    const Data = await newHomePageImageData.save();
    return res.status(200).json({ status: "success", data: { Data } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteHomePageImage = async (req, res) => {
  try {
    const { id } = req.params;
    const MemberData = await HomepageImage.findById(id);
    const DeletedMemberData = await HomepageImage.findByIdAndDelete(id);
    fs.unlinkSync(`${__dirname}/../../uploads/grp/${MemberData.imagePath}`);
    return res
      .status(200)
      .json({ status: "success", data: { DeletedMemberData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};
