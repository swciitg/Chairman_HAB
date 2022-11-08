const express = require('express');

const router = express.Router();

const MiscellaneousController = require('../controllers/miscellaneous');

router.get('/miscellaneous', MiscellaneousController.getMiscellaneous);

router.propfind('/miscellaneous/:id', MiscellaneousController.findMiscellaneous);

router.post('/miscellaneous', MiscellaneousController.postMiscellaneous);

router.put('/miscellaneous/:id', MiscellaneousController.putMiscellaneous);

router.delete('/miscellaneous/:id', MiscellaneousController.deleteMiscellaneous);

module.exports = router;