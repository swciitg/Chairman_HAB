const About = require("../models/about");
const factory = require("./handlerFactory");

exports.getAbout = async (req, res) => {
    try{
        const AboutData = await About.find({});
        return res.status(200).json({status:"success", data: {AboutData}});
    }
    catch (err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
}
exports.postAbout = async (req, res) => {
    try{
        await About.deleteMany({});
        // const {HTMLString} = req.body;
        const newAboutData = new About(req.body);
        const AboutData = await newAboutData.save();
        return res.status(200).json({ status: "success", data: {AboutData} });
    }
    catch (err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
}

exports.editAbout = factory.updateOne(About);
