const express = require('express');

const router = express.Router();

const InvitedTalks = require('../controller/invitedTalks');

router.get('/', InvitedTalks.getInvitedTalks);

router.post('/', InvitedTalks.postInvitedTalks);

router.propfind('/:id', InvitedTalks.findInvitedTalks);

router.put('/:id', InvitedTalks.editInvitedTalks);

router.delete('/:id', InvitedTalks.deleteInvitedTalks);

module.exports = router;