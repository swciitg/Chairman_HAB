const express = require('express');

const router = express.Router();

const MiscellaneousController = require('../controller/miscellaneous');

router.get('/', MiscellaneousController.getMiscellaneous);

router.propfind('/:id', MiscellaneousController.findMiscellaneous);

router.post('/', MiscellaneousController.postMiscellaneous);

router.put('/:id', MiscellaneousController.editMiscellaneous);

router.delete('/:id', MiscellaneousController.deleteMiscellaneous);

module.exports = router;