const keyReasearchArea = require("../models/keyReasearchArea");
// const dirname = require("../../dirname");
const fs = require("fs");

exports.getkeyReasearchArea = async (req, res) => {
  try {
    const { reas } = req.params;
    const keyReasearchAreaData = await keyReasearchArea
      .find({ reas: reas })
      .sort("priority_number");
    return res
      .status(200)
      .json({ status: "success", data: {keyReasearchAreaData} });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getOneReasearchImage = async (req, res) => {
  try {
    const { id } = req.params;
    const Reasearch = await keyReasearchArea.findById(id);
    if (Reasearch) {
      const ImagePath = `${__dirname}/../../uploads/reas/${Reasearch.imagePath}`;
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

exports.postReasearch = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(424)
        .json({ status: "Failed", message: "No File Provided" });
    }
    const { reas } = req.params;
    const {
      keyResearchAreaTitle,
      keyResearchAreaDescription,
      keyResearchAreaImage,
      priority_number,
    } = req.body;
    const imagePath = req.file.filename;
    const newkeyReasearchAreaData = new keyReasearchArea({
      keyResearchAreaTitle,
      keyResearchAreaDescription,
      keyResearchAreaImage,
      priority_number,
      imagePath,
    });
    const ReasearchData = await newkeyReasearchAreaData.save();
    return res.status(200).json({ status: "success", data: {ReasearchData} });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editReasearch = async (req, res) => {
  try {
    const { reas, id } = req.params;
    const keyReasearchAreaData = await keyReasearchArea.findById(id);
    const {
      keyResearchAreaTitle,
      keyResearchAreaDescription,
      keyResearchAreaImage,
      priority_number,
    } = req.body;
    let imagePath;
    let data = {
      keyResearchAreaTitle,
      keyResearchAreaDescription,
      keyResearchAreaImage,
      priority_number,
      reas,
    };
    if (req.file) {
      imagePath = req.file.filename;
      data = {
        keyResearchAreaTitle,
        keyResearchAreaDescription,
        keyResearchAreaImage,
        priority_number,
        reas,
      };
    }
    const UpdatedReasearchData = await keyReasearchArea.findByIdAndUpdate(
      id,
      data
    );
    if (req.file) {
      fs.unlinkSync(
        `${__dirname}/../../uploads/reas/${keyReasearchAreaData.imagePath}`
      );
    }
    return res
      .status(200)
      .json({ status: "success", data: UpdatedReasearchData });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteReasearch = async (req, res) => {
  try {
    const { id } = req.params;
    const ReasearchData = await keyReasearchArea.findById(id);
    const DeletedReasearchData = await keyReasearchArea.findByIdAndDelete(id);
    fs.unlinkSync(`${__dirname}/../../uploads/reas/${ReasearchData.imagePath}`);
    return res
      .status(200)
      .json({ status: "success", data: DeletedReasearchData });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};
