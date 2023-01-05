const express = require('express');

const router = express.Router();

const JournalPublications = require('../controller/journalPublications');

router.get('/', JournalPublications.getJournalPublications);

router.post('/', JournalPublications.postJournalPublications);

router.propfind('/:id', JournalPublications.findJournalPublications);

router.put('/:id', JournalPublications.editJournalPublications);

router.delete('/:id', JournalPublications.deleteJournalPublications);

module.exports = router;