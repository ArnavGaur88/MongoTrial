var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.get("/", function(request, response)
{
    response.writeHead("Content-Type": "text/plain");

    MongoClient.connect("mongodb://localhost:27017/arpit", function(err, db)
    {
        if(err)
            console.log("Can't do nothin'");
        else
        {
            db.collection("arpitTable").insertOne({"data": "through nodejs bitches!!!"});
        }
    });
});

var server = app.listen(80, "0.0.0.0", function()
{
    var host = server.address().address;
    var port = server.address().port;

    console.log("Running at: " + host + ": " + port);
})