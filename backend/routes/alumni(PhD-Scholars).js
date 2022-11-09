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

const Alumni = require('../controller/alumni(PhD-Scholars)');
const upload = multer({ storage: storage });
router.post('/:alumni', upload.single("image"), Alumni.postAlumni);

router.get('/:alumni/:id', Alumni.getOneAlumniImage);

router.get('/:alumni', Alumni.getAlumniProfile);

router.put('/:alumni/:id', upload.single("image"), Alumni.editAlumni);

router.delete('/:alumni/:id', Alumni.deleteAlumniProfile);

module.exports = router;