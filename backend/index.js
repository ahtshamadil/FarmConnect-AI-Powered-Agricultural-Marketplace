3
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = 3000;
 connectDB();


app.get('/message', (req, res) => {
  res.send('Hello from the backend!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
