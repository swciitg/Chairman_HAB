const express = require('express');

const router = express.Router();

const InvitedTalks = require('../controller/invitedTalks');

router.get('/invitedTalks', InvitedTalks.getInvitedTalks);

router.post('/invitedTalks', InvitedTalks.postInvitedTalks);

router.propfind('/invitedTalks/:id', InvitedTalks.findInvitedTalks);

router.put('/invitedTalks/:id', InvitedTalks.editInvitedTalks);

router.delete('/invitedTalks/:id', InvitedTalks.deleteInvitedTalks);

module.exports = router;