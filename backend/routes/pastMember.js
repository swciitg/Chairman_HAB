const express = require('express');

const router = express.Router();

const PastMembers = require('../controller/pastMember');

router.get('/', PastMembers.getPastMembers);

router.post('/', PastMembers.postPastMembers);

router.propfind('/:id', PastMembers.findPastMembers);

router.put('/:id', PastMembers.editPastMembers);

router.delete('/:id', PastMembers.deletePastMembers);

module.exports = router;