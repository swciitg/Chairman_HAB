const GroupMembers = require("../models/groupMembers");
// const dirname = require("../../dirname");
const fs = require("fs");

exports.getGroupMembers = async (req, res) => {
  try {
    const { grp } = req.params;
    const GroupMembersData = await GroupMembers.find({ grp: grp }).sort(
      "priority_number"
    );
    return res
      .status(200)
      .json({ status: "success", data: { GroupMembersData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getOneMemberImage = async (req, res) => {
  try {
    const { id } = req.params;
    const Member = await GroupMembers.findById(id);
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

exports.postMember = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(424)
        .json({ status: "Failed", message: "No File Provided" });
    }
    const { grp } = req.params;
    const {
      memberName,
      email,
      phone,
      designation,
      priority_number,
      googleScholar,
      researchInterest,
    } = req.body;
    const imagePath = req.file.filename;
    const newGroupMembersData = new GroupMembers({
      memberName,
      email,
      phone,
      designation,
      priority_number,
      googleScholar,
      researchInterest,
      imagePath,
    });
    const MemberData = await newGroupMembersData.save();
    return res.status(200).json({ status: "success", data: { MemberData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editMember = async (req, res) => {
  try {
    const { grp, id } = req.params;
    const GroupMembersData = await GroupMembers.findById(id);
    const {
      memberName,
      email,
      phone,
      designation,
      priority_number,
      googleScholar,
      researchInterest,
    } = req.body;
    let imagePath;
    let data = {
      memberName,
      email,
      phone,
      designation,
      priority_number,
      googleScholar,
      researchInterest,
      grp,
    };
    if (req.file) {
      imagePath = req.file.filename;
      data = {
        memberName,
        email,
        phone,
        designation,
        priority_number,
        googleScholar,
        researchInterest,
        grp,
      };
    }
    const UpdatedMemberData = await GroupMembers.findByIdAndUpdate(id, data);
    if (req.file) {
      fs.unlinkSync(
        `${__dirname}/../../uploads/grp/${GroupMembersData.imagePath}`
      );
    }
    return res
      .status(200)
      .json({ status: "success", data: { UpdatedMemberData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    const MemberData = await GroupMembers.findById(id);
    const DeletedMemberData = await GroupMembers.findByIdAndDelete(id);
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
