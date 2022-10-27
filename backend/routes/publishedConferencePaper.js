const express = require('express');
const router = express.Router();
const PublishedConferencePaper = require('../controllers/publishedConferencePaper');

router.get('/publishedConferencePaper', PublishedConferencePaper.getPublishedConferencePapers);

router.propfind('/publishedConferencePaper/:id', PublishedConferencePaper.findPublishedConferencePapers);

router.post('/publishedConferencePaper', PublishedConferencePaper.postPublishedConferencePapers);

router.put('/publishedConferencePaper/:id', PublishedConferencePaper.putPublishedConferencePapers);

router.delete('/publishedConferencePaper/:id', PublishedConferencePaper.deletePublishedConferencePapers);

module.exports = router;