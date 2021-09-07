const { PORT } = require('./config/environment_variables');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
  res.send('Notflix');
})

const userRouter = require("./routes/users");
app.use(userRouter);

app.listen(PORT, () => console.log(`Backend is running on ${PORT}`))