const express = require('express');

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

const Profile = require('../controller/profile');
const upload = multer({ storage: storage });
router.post('/:profile', upload.single("image"), Profile.postProfile);

router.get('/:profile', Profile.getProfile);

router.put('/:profile/:id', upload.single("image"), Profile.editProfile);

router.delete('/:profile/:id', Profile.deleteProfile);

module.exports = router;