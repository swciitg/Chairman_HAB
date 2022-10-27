const express = require('express');

const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${__dirname}/../../uploads/team`);
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.replace(/\s/g, "");
      cb(null, Date.now().toString() + fileName);
    },
  });

const GroupMember = require('../controller/groupMembers');
const upload = multer({ storage: storage });
router.post('/:groupMembers', upload.single("image"), GroupMember.postMember);

router.get('/:groupMembers/:id', GroupMember.getOneMemberImage);

router.get('/:groupMembers', GroupMember.getGroupMembers);

router.put('/:groupMembers/:id', upload.single("image"), GroupMember.editMember);

router.delete('/:groupMembers/:id', GroupMember.deleteMember);

module.exports = router;