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

const KeyReasearchArea = require('../controller/keyReasearchArea');
const upload = multer({ storage: storage });
router.post('/:keyReasearchArea', upload.single("image"), KeyReasearchArea.postReasearch);

router.get('/:keyReasearchArea/:id', KeyReasearchArea.getOneReasearchImage);

router.get('/:keyReasearchArea', KeyReasearchArea.getkeyReasearchArea);

router.put('/:keyReasearchArea/:id', upload.single("image"), KeyReasearchArea.editReasearch);

router.delete('/:keyReasearchArea/:id', KeyReasearchArea.deleteReasearch);

module.exports = router;