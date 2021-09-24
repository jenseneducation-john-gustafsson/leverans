const mongoose = require("mongoose");

const FilmSchema = mongoose.Schema({
  apiId: {
    type: Number,
  },
  title: {
    type: String,
  },
  genre: {
    type: String
  },
  price: {
    type: Number
  }
});


const Film = mongoose.model("film", FilmSchema);
module.exports = Film;