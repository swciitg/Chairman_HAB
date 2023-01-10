const express = require("express");

const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/grp`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});

const GroupMember = require("../controller/groupMembers");
const upload = multer({ storage: storage });
router.post("/", upload.single("imagePath"), GroupMember.postMember);

router.get("/:id", GroupMember.getOneMemberImage);

router.get("/", GroupMember.getGroupMembers);

router.put("/:id", upload.single("image"), GroupMember.editMember);

router.delete("/:id", GroupMember.deleteMember);

module.exports = router;
