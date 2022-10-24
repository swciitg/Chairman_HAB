const express = require('express');
const router = express.Router();
const Project = require('../models/projects');
const Alumni = require('../models/alumni(PhD-Scholars)');
const About = require('../models/about');
const Collaborator = require('../models/collabarators');
const Profile = require('../models/profile');
const ExperimentalFacilities = require('../models/experimentalFacilities');
const Member = require('../models/groupMembers');
const InvitedTalk = require('../models/invitedTalks');
const JournalPublication = require('../models/journalPublications');
const KeyResearchArea = require('../models/keyReasearchArea');
const MiscellaneousPoster = require('../models/miscellaneous');
const PastMember = require('../models/pastMember');
const Update = require('../models/updates');
const PublishedConferencePaper = require('../models/publishedConferencePapers');
const SimulationSoftwares = require('../models/simulationSoftwares');


router.post('/projects', function(req, res, next){
    Project.create(req.body).then(function(project){
        res.send(project);
    }).catch(next);
});

router.delete('/projects/:id', function(req, res, next){
    Project.findByIdAndRemove({_id: req.params.id}).then(function(project){
        res.send(project);
    }).catch(next);
})


router.post('/about', function(req, res, next){
    About.create(req.body).then(function(about){
        res.send(about);
    }).catch(next);
})

router.delete('/about/:id', function(req, res, next){
    About.findByIdAndRemove({_id: req.params.id}).then(function(about){
        res.send(about);
    }).catch(next);
})

router.post('/alumni', function(req, res, next){
    Alumni.create(req.body).then(function(alumni){
        res.send(alumni);
    }).catch(next);
})

router.delete('/alumni/:id', function(req, res, next){
    Alumni.findByIdAndRemove({_id: req.params.id}).then(function(alumni){
        res.send(alumni);
    }).catch(next);
})

router.post('/collabarators', function(req, res, next){
    Collaborator.create(req.body).then(function(collaborator){
        res.send(collaborator);
    }).catch(next);
})

router.delete('/collabarators/:id', function(req, res, next){
    Collaborator.findByIdAndRemove({_id: req.params.id}).then(function(collaborator){
        res.send(collaborator);
    }).catch(next);
})

router.post('/experimentalFacilities', function(req, res, next){
    ExperimentalFacilities.create(req.body).then(function(experimentalFacilities){
        res.send(experimentalFacilities);
    }).catch(next);
})

router.delete('/experimentalFacilities/:id', function(req, res, next){
    ExperimentalFacilities.findByIdAndRemove({_id: req.params.id}).then(function(experimentalFacilities){
        res.send(experimentalFacilities);
    }).catch(next);
})

router.post('/members', function(req, res, next){
    Member.create(req.body).then(function(member){
        res.send(member);
    }).catch(next);
})

router.delete('/members/:id', function(req, res, next){
    Member.findByIdAndRemove({_id: req.params.id}).then(function(member){
        res.send(member);
    }).catch(next);
})

router.post('/invitedTalks', function(req, res, next){
    InvitedTalk.create(req.body).then(function(invitedTalk){
        res.send(invitedTalk);
    }).catch(next);
})

router.delete('/invitedTalks/:id', function(req, res, next){
    InvitedTalk.findByIdAndRemove({_id: req.params.id}).then(function(invitedTalk){
        res.send(invitedTalk);
    }).catch(next);
})

router.post('/journalPublication', function(req, res, next){
    JournalPublication.create(req.body).then(function(journalPublication){
        res.send(journalPublication);
    }).catch(next);
})

router.delete('/journalPublication/:id', function(req, res, next){
    JournalPublication.findByIdAndRemove({_id: req.params.id}).then(function(journalPublication){
        res.send(journalPublication);
    }).catch(next);
})


router.post('/keyResearchArea', function(req, res, next){
    KeyResearchArea.create(req.body).then(function(keyResearchArea){
        res.send(keyResearchArea);
    }).catch(next);
})

router.delete('/keyResearchArea/:id', function(req, res, next){
    KeyResearchArea.findByIdAndRemove({_id: req.params.id}).then(function(keyResearchArea){
        res.send(keyResearchArea);
    }).catch(next);
})

router.post('/miscellaneousPoster', function(req, res, next){
    MiscellaneousPoster.create(req.body).then(function(miscellaneousPoster){
        res.send(miscellaneousPoster);
    }).catch(next);
})

router.delete('/miscellaneousPoster/:id', function(req, res, next){
    MiscellaneousPoster.findByIdAndRemove({_id: req.params.id}).then(function(miscellaneousPoster){
        res.send(miscellaneousPoster);
    }).catch(next);
})

router.post('/pastMember', function(req, res, next){
    PastMember.create(req.body).then(function(pastMember){
        res.send(pastMember);
    }).catch(next);
})

router.delete('/pastMember/:id', function(req, res, next){
    PastMember.findByIdAndRemove({_id: req.params.id}).then(function(pastMember){
        res.send(pastMember);
    }).catch(next);
})


router.post('/profileMember', function(req, res, next){
    Profile.create(req.body).then(function(profileMember){
        res.send(profileMember);
    }).catch(next);
})

router.delete('/profileMember/:id', function(req, res, next){
    Profile.findByIdAndRemove({_id: req.params.id}).then(function(profileMember){
        res.send(profileMember);
    }).catch(next);
})

router.post('/publishedConferencePaper', function(req, res, next){
    PublishedConferencePaper.create(req.body).then(function(publishedConferencePaper){
        res.send(publishedConferencePaper);
    }).catch(next);
})

router.delete('/publishedConferencePaper/:id', function(req, res, next){
    PublishedConferencePaper.findByIdAndRemove({_id: req.params.id}).then(function(publishedConferencePaper){
        res.send(publishedConferencePaper);
    }).catch(next);
})

router.post('/simulationSoftwares', function(req, res, next){
    SimulationSoftwares.create(req.body).then(function(simulationSoftwares){
        res.send(simulationSoftwares);
    }).catch(next);
})

router.delete('/simulationSoftwares/:id', function(req, res, next){
    SimulationSoftwares.findByIdAndRemove({_id: req.params.id}).then(function(simulationSoftwares){
        res.send(simulationSoftwares);
    }).catch(next);
})


router.post('/update', function(req, res, next){
    Update.create(req.body).then(function(update){
        res.send(update);
    }).catch(next);
})

router.delete('/update/:id', function(req, res, next){
    Update.findByIdAndRemove({_id: req.params.id}).then(function(update){
        res.send(update);
    }).catch(next);
})





module.exports = router;