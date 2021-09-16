const { PORT } = require('./config/environment_variables');

const ConnectDB = require("./config/db.js")

const path = require("path");

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://notflix.clientsmile.se");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


ConnectDB();


app.use(express.static(path.join(__dirname, "../build")));

const userRouter = require("./routes/users");
app.use(userRouter);



// app.use('/', (req, res) => {
//   res.send('Notflix');
// })


app.listen(PORT, () => console.log(`Backend is running on ${PORT}`))