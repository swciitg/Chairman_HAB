const express = require('express');

const router = express.Router();
const multer = require("multer");

const JournalPublications = require('../controller/journalPublications');
const upload = multer();
router.get('/', JournalPublications.getJournalPublications);

router.post('/', upload.any(), JournalPublications.postJournalPublications);

router.propfind('/:id', JournalPublications.findJournalPublications);

router.put('/:id', JournalPublications.editJournalPublications);

router.delete('/:id', JournalPublications.deleteJournalPublications);

module.exports = router;