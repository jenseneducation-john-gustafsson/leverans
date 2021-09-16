// Mongoose connection to mongodb

const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {

    await mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false");
    console.log("MongoDB Connection Succeded!");

  } catch (error) {

    console.log("MongoDB Connection Failed: ", error);
  }
}

module.exports = ConnectDB;