const simulationSoftwares = require("../models/simulationSoftwares");
// const dirname = require("../../dirname");
const fs = require("fs");

exports.getsimulationSoftwares = async (req, res) => {
  try {
    const { sim } = req.params;
    const simulationSoftwaresData = await simulationSoftwares
      .find({ sim: sim })
      .sort("priority_number");
    return res
      .status(200)
      .json({ status: "success", data: { simulationSoftwaresData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getOneSimulationImage = async (req, res) => {
  try {
    const { id } = req.params;
    const Simulation = await simulationSoftwares.findById(id);
    if (Simulation) {
      const ImagePath = `${__dirname}/../../uploads/sim/${Simulation.imagePath}`;
      fs.readFile(ImagePath, (err, data) => {
        res.contentType("image/jpeg");
        return res.send(data);
      });
    } else {
      return res
        .status(424)
        .json({ status: "Failed", message: "Request failed" });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.postSimulation = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(424)
        .json({ status: "Failed", message: "No File Provided" });
    }
    const { sim } = req.params;
    const {
      simulationSoftwaresTitle,
      simulationSoftwaresImage,
      priority_number,
    } = req.body;
    const imagePath = req.file.filename;
    const newsimulationSoftwaresData = new simulationSoftwares({
      simulationSoftwaresTitle,
      simulationSoftwaresImage,
      priority_number,
      imagePath,
    });
    const SimulationData = await newsimulationSoftwaresData.save();
    return res
      .status(200)
      .json({ status: "success", data: { SimulationData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editSimulation = async (req, res) => {
  try {
    const { sim, id } = req.params;
    const simulationSoftwaresData = await simulationSoftwares.findById(id);
    const {
      simulationSoftwaresTitle,
      simulationSoftwaresImage,
      priority_number,
    } = req.body;
    let imagePath;
    let data = {
      simulationSoftwaresTitle,
      simulationSoftwaresImage,
      priority_number,
      sim,
    };
    if (req.file) {
      imagePath = req.file.filename;
      data = {
        simulationSoftwaresTitle,
        simulationSoftwaresImage,
        priority_number,
        priority_number,
        sim,
      };
    }
    const UpdatedSimulationData = await simulationSoftwares.findByIdAndUpdate(
      id,
      data
    );
    if (req.file) {
      fs.unlinkSync(
        `${__dirname}/../../uploads/sim/${simulationSoftwaresData.imagePath}`
      );
    }
    return res
      .status(200)
      .json({ status: "success", data: { UpdatedSimulationData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteSimulation = async (req, res) => {
  try {
    const { id } = req.params;
    const SimulationData = await simulationSoftwares.findById(id);
    const DeletedSimulationData = await simulationSoftwares.findByIdAndDelete(
      id
    );
    fs.unlinkSync(`${__dirname}/../../uploads/sim/${SimulationData.imagePath}`);
    return res
      .status(200)
      .json({ status: "success", data: { DeletedSimulationData } });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};
