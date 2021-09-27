const Film = require("../models/FilmDBMod");
const Bundles = require("../models/Films_Bundle");


exports.films = async (req, res) => {

  const filmList = await Film.find();

  res.status(200).json(filmList);
};

exports.bundles = async (req, res) => {

  const bundlesList = await Bundles.find();

  res.status(200).json(bundlesList);

}

