const categoryModel = require("../models/Catergory.model");

const createCategory = async (req, res) => {
  const { name, description } = req.body;
  const userId = await req.userId;
  const image = await req.file?.path;

  const newCategory = await categoryModel.create({
    name,
    description,
    userId,
    image,
  });

  if (newCategory) {
    return res.status(200).json({ data: newCategory });
  } else {
    res.status(400).json({ message: "unable to create category" });
  }
};

const getCategory = async (req, res) => {
  const data = await categoryModel
    .find({})
    .populate({ path: "userId", select: "email name username -_id" });
  res.json({ data }).status(200);
};

const getCategoryById = async (req, res) => {
  const _id = req.param.id;
  const data = await categoryModel
    .find({ _id })
    .populate({ path: "userId", select: "email name username -_id" });

  if (data) {
    return res.status(200).json({ data });
  } else {
    res.status(400).json({ message: "category not found" });
  }
};

const updateCategory = async (req, res) => {
  const _id = req.params.id;
  const findCat = await categoryModel.findById({ _id });
  if (findCat) {
    const name = req.body.name || findCat.name;
    const description = req.body.description || findCat.description;
    const image = req.file?.path || findCat.image;
    const updatedCat = await categoryModel.findByIdAndUpdate(
      { _id },
      { name, description, image }
    );
    return res.status(200).json({ data: updatedCat });
  } else {
    return res.status(400).json({ message: "category not found" });
  }
};

const deleteCategory = async (req, res) => {
  const _id = req.params.id;
  const findCat = await categoryModel.findById({ _id });
  if (findCat) {
    await categoryModel.findByIdAndDelete({ _id });
    return res.json({ message: "category deleted" }).status(200);
  } else {
    return res.json({ message: "category not found" }).status(400);
  }
};

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getCategoryById
};
