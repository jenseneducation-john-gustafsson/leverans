const routerFilms = require("express").Router();
const FilmsController = require('../controllers/productsDBCon');

//Films Route
routerFilms.get("/api/films", FilmsController.films);

//Bundles Route
routerFilms.get("/api/bundles");


module.exports = routerFilms;