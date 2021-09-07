const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = 4000;
app.listen(PORT, () => console.log(`Backend is running on ${PORT}`))