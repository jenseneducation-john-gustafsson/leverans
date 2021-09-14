const { PORT } = require('./config/environment_variables');

const ConnectDB = require("./config/db.js")

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


ConnectDB();



const userRouter = require("./routes/users");
app.use(userRouter);


app.use('/', (req, res) => {
  res.send('Notflix');
})


app.listen(PORT, () => console.log(`Backend is running on ${PORT}`))