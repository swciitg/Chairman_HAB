const express = require('express');
const router = express.Router();

const Projects = require('../controller/project');

router.get('/', Projects.getProjects);

router.post('/', Projects.postProjects);

router.propfind('/:id', Projects.findProjects);

router.put('/:id', Projects.editProjects);

router.delete('/:id', Projects.deleteProjects);

module.exports = router;
