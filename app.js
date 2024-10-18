const express = require("express");
const app = express();

app.get("/", function(req, res) {
    return res.send("Hello World");
});

app.get("/sockjs/735/05lomy0k/websocket", function(req, res) {
    return res.send("socket");
});

// app.use("/static", express.static(__dirname + '/static'));

app.use("/static", (req, res) => {
    // Generate a large header value
    const largeHeaderValue = 'A'.repeat(8000); // 8KB header value for testing

    // Set the large header
    res.set('X-Large-Header', largeHeaderValue);

    // Send a 404 status with a response body
    res.status(404).send('Resource not found');
});


app.listen(3000, function(){
    console.log('Listening on port 3000');
});