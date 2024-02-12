// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const carRouter = require('./routers/carRouter');
const PORT=process.env.PORT || 3001; 

app.use(express.json());

// Connect to MongoDB
connectDB();

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Mount the phonebook router at the '/phonebooks' URL path
app.use('/api', carRouter);

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

