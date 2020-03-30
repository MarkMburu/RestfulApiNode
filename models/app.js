const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if (process.env.ENV === 'Test') {
  console.log('This is a test');
  const db = mongoose.connect('mongodb://localhost/bookAPI');
} else {
  console.log('This is not a test');
  const db = mongoose.connect('mongodb://localhost/bookAPI');
}
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome from my Nodemon API');
});

app.server = app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

module.exports = app;
