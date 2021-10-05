const Film = require("../models/FilmDBMod");
const FilmBundles = require("../models/Films_Bundle");


exports.films = async (req, res) => {

  const filmList = await Film.find();

  res.status(200).json(filmList);
};

exports.bundles = async (req, res) => {

  const bundlesList = await FilmBundles.find();

  res.status(200).json(bundlesList);

}

