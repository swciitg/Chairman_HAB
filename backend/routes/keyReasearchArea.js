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

const KeyReasearchArea = require("../controller/keyReasearchArea");
const upload = multer({ storage: storage });
router.post(
  "/",
  upload.single("keyResearchAreaImage"),
  KeyReasearchArea.postReasearch
);

router.get("/:id", KeyReasearchArea.getOneReasearchImage);

router.get("/", KeyReasearchArea.getkeyReasearchArea);

router.put("/:id", upload.single("image"), KeyReasearchArea.editReasearch);

router.delete("/:id", KeyReasearchArea.deleteReasearch);

module.exports = router;
