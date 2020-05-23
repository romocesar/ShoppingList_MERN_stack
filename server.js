//Import external dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Call project files
const items = require('./routes/api/items');

const app = express();

//Bodyparser MiddleWare that extracts the body portion of an incoming request
app.use(bodyParser.json())

//DB Config
const connection = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
      .connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
      .then(() => console.log('MongoDB Connected ...'))
      .catch(err => console.log(err));

//Manage routes´s calls
app.use('/api/items', items);

//Set up production environment Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
