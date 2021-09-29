const { PORT } = require('./config/environment_variables');

const ConnectDB = require("./config/db.js")

const path = require("path");

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


ConnectDB();


app.use(express.static(path.join(__dirname, "../build")));

const userRouter = require("./routes/users");
app.use(userRouter);

const filmRouter = require("./routes/productsDBRou");
app.use(filmRouter);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"))
})


app.listen(PORT, () => console.log(`Backend is running on ${PORT}`))