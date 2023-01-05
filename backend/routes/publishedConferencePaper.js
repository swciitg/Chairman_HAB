const express = require('express');
const router = express.Router();
const PublishedConferencePaper = require('../controller/publishedConferencePapers');

router.get('/', PublishedConferencePaper.getPublishedConferencePapers);

router.propfind('/:id', PublishedConferencePaper.findPublishedConferencePapers);

router.post('/', PublishedConferencePaper.postPublishedConferencePapers);

router.put('/:id', PublishedConferencePaper.editPublishedConferencePapers);

router.delete('/:id', PublishedConferencePaper.deletePublishedConferencePapers);

module.exports = router;