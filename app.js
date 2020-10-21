var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var path    = require('path');
var app     = express();
var port    = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/feed/:hashTag', function(req, res) {
    request('https://twitter.com/hashtag/'+req.params.hashTag+'?f=tweets&vertical=default', function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var items = $('ul.s-results-list-atf').html();

            res.send(tweets);
        }
    });
});

app.listen(port);
