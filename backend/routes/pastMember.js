const express = require('express');

const router = express.Router();

const PastMembers = require('../controller/pastMembers');

router.get('/pastMembers', PastMembers.getPastMembers);

router.post('/pastMembers', PastMembers.postPastMembers);

router.propfind('/pastMembers/:id', PastMembers.findPastMembers);

router.put('/pastMembers/:id', PastMembers.editPastMembers);

router.delete('/pastMembers/:id', PastMembers.deletePastMembers);

module.exports = router;