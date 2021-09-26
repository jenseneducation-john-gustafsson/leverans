const mongoose = require("mongoose");

const FilmSchemaBundle =mongoose.Schema({

    apiId:{
        type:Number,
    },
    title:{
        type:String,
    },
    genre:{
        type:String,
    },
    price:{
        type:Number,
    }
});

const FilmBundle = mongoose.model("FilmBundle", FilmSchemaBundle);
module.exports = FilmBundle;