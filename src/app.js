const express = require("express");
const app = express();

app.get("/", function(req, res) {
    console.log("Request made on / endpoint");
    
    return res.send("Hello World");

});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});