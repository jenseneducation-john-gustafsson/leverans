const Film = require("../models/FilmDBMod");


exports.films = async (req, res) => {

  const filmList = await Film.find();

  res.status(200).json(filmList);
};

exports.bundles = (req, res) => {

  //Find bundles

}

