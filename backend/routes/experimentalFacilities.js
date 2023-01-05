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

const ExperimentalFacilities = require('../controller/experimentalFacilities');
const upload = multer({ storage: storage });
router.post('/', upload.single("experimentalFacilitiesImage"), ExperimentalFacilities.postExperimentalFacility);

router.get('/:id', ExperimentalFacilities.getExperimentalFacilityImage);

router.get('/', ExperimentalFacilities.getExperimentalFacilities);

router.put('/:id', upload.single("image"), ExperimentalFacilities.editExperimentalFacility);

router.delete('/:id', ExperimentalFacilities.deleteExperimentalFacility);

module.exports = router;