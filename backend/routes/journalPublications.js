const express = require('express');

const router = express.Router();

const JournalPublications = require('../controller/journalPublications');

router.get('/journalPublications', JournalPublications.getJournalPublications);

router.post('/journalPublications', JournalPublications.postJournalPublications);

router.propfind('/journalPublications/:id', JournalPublications.findJournalPublications);

router.put('/journalPublications/:id', JournalPublications.updateJournalPublications);

router.delete('/journalPublications/:id', JournalPublications.deleteJournalPublications);

module.exports = router;