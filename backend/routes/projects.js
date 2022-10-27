const express = require('express');
const router = express.Router();

const Projects = require('../controller/project');

router.get('/projects', Projects.getProjects);

router.post('/projects', Projects.postProjects);

router.propfind('/projects/:id', Projects.findProjects);

router.put('/projects/:id', Projects.updateProjects);

router.delete('/projects/:id', Projects.deleteProjects);

module.exports = router;
