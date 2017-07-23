var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var CORS = "/cors";
var PORT = 3000;

var app = express();

// Statics files
app.use(express.static('www'));

// Prepate body-parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Proxy
app.proxy = (url, res) => {
    request.get(url)
        .on('response', (r) => {
            res.statusCode = r.statusCode;
            res.setHeader('content-type', r.headers['content-type']);
            res.setHeader('Access-Control-Allow-Origin', '*');
        })
        .on('data', (data) => {
            res.write(data);
        })
        .on('end', () => {
            res.end();
        });
};

// GET PROXY
app.get(CORS, (req, res, next) => {
    app.proxy(req.query.target, res);
});

// POST PROXY
app.post(CORS, (req, res, next) => {
    if (req.body == undefined || req.body.target == undefined) {
        res.send('ko');
        next();
        return;
    }
    let url = req.body.target + '?';
    req.body.target = undefined;
    let params = Object.keys(req.body);
    for (let x in params) {
        if (req.body[params[x]] != undefined) {
            url += params[x] + "=" + req.body[params[x]] + "&";
        }
    }
    app.proxy(url, res);
});

// PUT PROXY
app.put(CORS, (req, res, next) => {
    if (req.body == undefined || req.body.target == undefined) {
        res.send('ko');
        next();
        return;
    }
    let url = req.body.target + '?';
    req.body.target = undefined;
    let params = Object.keys(req.body);
    for (let x in params) {
        if (req.body[params[x]] != undefined) {
            url += params[x] + "=" + req.body[params[x]] + "&";
        }
    }
    app.proxy(url, res);
});

// Preflight PROXY
app.options(CORS, (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', req.headers['origin']);
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, PUT, POST, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Accept,Origin,Content-Type');
    res.end();
});

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});

