const express = require('express');

const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${__dirname}/../../uploads/grp`);
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.replace(/\s/g, "");
      cb(null, Date.now().toString() + fileName);
    },
  });

const SimulationSoftwares = require('../controller/simulationSoftwares');
const upload = multer({ storage: storage });
router.post('/:simulationSoftwares', upload.single("image"), SimulationSoftwares.postSimulation);

router.get('/:simulationSoftwares/:id', SimulationSoftwares.getOneSimulationImage);

router.get('/:simulationSoftwares', SimulationSoftwares.getsimulationSoftwares);

router.put('/:simulationSoftwares/:id', upload.single("image"), SimulationSoftwares.editSimulation);

router.delete('/:simulationSoftwares/:id', SimulationSoftwares.deleteSimulation);

module.exports = router;