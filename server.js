// create a server.js file that will hold all info for back end. 
// required files
const express = require('express');
const apiRoutes= require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const path = require('path');

//PORT for heroku and default
const PORT = process.env.port || 3001; 

const app = express(); 

// Middleware for reading URL format and JSON format
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

// static paths???
app.use(express.static('public'));

// USE route for home page (index.html)
app.use('/', htmlRoutes);

// USE route for notes.html 
app.use('/notes', apiRoutes);

// GET route for wildcard page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// );

// listener for port
app.listen(PORT, ()=> 
console.log(`Listening at http://localhost:${PORT} 🚀`)
);