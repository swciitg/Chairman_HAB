const express = require("express");

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

const SimulationSoftwares = require("../controller/simulationSoftwares");
const upload = multer({ storage: storage });
router.post("/", upload.single("simulationSoftwaresImage"), SimulationSoftwares.postSimulation);

router.get("/:id", SimulationSoftwares.getOneSimulationImage);

router.get("/", SimulationSoftwares.getsimulationSoftwares);

router.put("/:id", upload.single("image"), SimulationSoftwares.editSimulation);

router.delete("/:id", SimulationSoftwares.deleteSimulation);

module.exports = router;
