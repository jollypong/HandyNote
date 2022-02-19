// create a server.js file that will hold all info for back end. 

//required files
const express = require('express');
const path = require('path');
const api = require('./Develop/routes/index.js.js');

const PORT = process.env.port || 3001; 

const app = express(); 

// static paths???

//middleware 
//parse JSON and URLencoded form data 

// import routes 
// GET route for index.html 
// GET route for notes.html 
// GET route for wildcard page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);


app.listen(PORT, ()=> 
console.log(`App listening at http://localhost:${PORT} 🚀`)
);