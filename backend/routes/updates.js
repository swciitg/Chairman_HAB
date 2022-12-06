const express = require('express');

const router = express.Router();

const UpdatesController = require('../controller/updates');

router.get('/', UpdatesController.getUpdates);

router.propfind('/:id', UpdatesController.findUpdates);

router.post('/', UpdatesController.postUpdates);

router.put('/:id', UpdatesController.editUpdates);

router.delete('/:id', UpdatesController.deleteUpdates);

module.exports = router;