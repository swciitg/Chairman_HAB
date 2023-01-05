const express = require('express');
const router = express.Router();
const aboutController = require('../controller/about');

router.get('/', aboutController.getAbout);

router.post("/", aboutController.postAbout);


module.exports = router;



