const express = require("express");

const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/home`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});

const HomePageImage = require("../controller/homePageImage");
const upload = multer({ storage: storage });
router.post("/", upload.single("image"), HomePageImage.postHomePageImage);

router.get("/:id", HomePageImage.getOneHomePageImage);

router.get("/", HomePageImage.getHomePageImage);

// router.put("/:id", upload.single("image"), HomePageImage.editHomePageImage);

router.delete("/:id", HomePageImage.deleteHomePageImage);

module.exports = router;
