const express = require("express");

const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/alum`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});

const Alumni = require("../controller/alumni(PhD-Scholars)");
const upload = multer({ storage: storage });
router.post("/", upload.single("profileImage"), Alumni.postAlumni);

router.get("/:id", Alumni.getOneAlumniImage);

router.get("/", Alumni.getAlumniProfile);

router.put("/:id", upload.single("image"), Alumni.editAlumni);

router.delete("/:id", Alumni.deleteAlumniProfile);

module.exports = router;
