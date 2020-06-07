const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
//Connection to atlas
mongoose.connect('mongodb+srv://Aircnc:omnistack@aircnc-in0bk.mongodb.net/Aircnc?retryWrites=true&w=majority',  {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333 ,  () => { console.log('Server running') });