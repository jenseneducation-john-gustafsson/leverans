const mongoose = require("mongoose");

const BundlesSchema =mongoose.Schema({

    name:{
        type:String,
    },
    id:{
        type:Number,
    },
    genre:{
        type:String,
    },
    price:{
        type:Number,
    },
    img:{
        type:String,
    }
});

const Bundle = mongoose.model("bundle", BundlesSchema);
module.exports = Bundle;