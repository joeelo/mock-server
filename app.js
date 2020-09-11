const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//route imports
const blogRoutes = require('./routes/blogs');

app.use(cors());
app.use(bodyParser.json());
app.use('/blogs', blogRoutes);

app.get('/ping', (req, res) => {
  const val = [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
  res.send({response: val});
})

mongoose.connect(
  process.env.DB_CONNECTION, 
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('connected')
)

app.listen(process.env.PORT || 3005);