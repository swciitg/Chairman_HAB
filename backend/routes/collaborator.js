const express = require('express');
const router = express.Router();
const collaboratorController = require('../controller/collaborator')

router.post('/collaborator', collaboratorController.postCollaborators);

router.get('/collaborator', collaboratorController.getCollaborators);

router.delete('/collaborator/:id', collaboratorController.deleteCollaborators);

router.put('/collaborator/:id', collaboratorController.editCollaborators);

router.propfind('/collaborator/:id', collaboratorController.findCollaborators);

module.exports = router;