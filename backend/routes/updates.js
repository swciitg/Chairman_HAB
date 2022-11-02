const express = require('express');

const router = express.Router();

const UpdatesController = require('../controllers/updates');

router.get('/updates', UpdatesController.getUpdates);

router.propfind('/updates/:id', UpdatesController.findUpdates);

router.post('/updates', UpdatesController.postUpdates);

router.put('/updates/:id', UpdatesController.putUpdates);

router.delete('/updates/:id', UpdatesController.deleteUpdates);

module.exports = router;