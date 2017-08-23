/* ===================
   Import Node Modules
=================== */
const express   = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app       = express(); // Initiate Express Application

 
/*
// Provide static directory for frontend
app.use(express.static(__dirname + '/client/dist/'));
// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});
 */
app.get('/',(rq, res) => {
    res.send('hello World');
});


// Start Server: Listen on port 8080
app.listen(8080, () => {
  console.log('Listening on port 8080');
});