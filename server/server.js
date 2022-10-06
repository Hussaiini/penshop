// This will import the express module
import express from 'express';

// This is to initiate express
const app = express();
app.get('/', (req, res) => {
  //This is to get a response
  res.send('API is Up and Runing!');
});

// This is to set a prot for the server to run
app.listen(5000, console.log(' my server is running'));
