const express = require('express');
const router = express.Router();
const collaboratorController = require('../controller/collaborator')

router.post('/', collaboratorController.postCollaborators);

router.get('/', collaboratorController.getCollaborators);

router.delete('/:id', collaboratorController.deleteCollaborators);

router.put('/:id', collaboratorController.editCollaborators);

router.propfind('/:id', collaboratorController.findCollaborators);

module.exports = router;