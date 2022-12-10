const Books = require("../models/books");

const factory = require("./handlerFactory");

exports.getBook = async (req, res) => {
  try {
    const Book = await Books.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        Book,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.findBook = async (req, res) => {
  try {
    const Book = await Books.find({}).sort("-creation");

    res.status(200).json({
      status: "success",
      data: {
        Book,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.postBook = async (req, res, next) => {
  try {
    var { booktitle, bookname, bookBody } = req.body;

    const doc = await new Books({
      booktitle,
      bookname,
      bookBody,
    }).save();

    res.status(201).json({
      status: "success",
      data: doc,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editBook = factory.updateOne(Books);

exports.deleteBook = factory.deleteOne(Books);

