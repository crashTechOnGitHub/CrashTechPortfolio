const express = require ('express')
const path = require('path')
const app= express();
app.use('/',express.static(path.join(__dirname,'page-transition')));
const iPort=3030;
app.listen(iPort, function () {
    console.log(`Congrats, your producer app is listening on port ${iPort}!`);
});