require('dotenv').config()
var express = require('express');
var fs = require('fs');
var app = express();
var port = 80;
var cors = require('cors');
console.log(port)
// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


const frontEndPath2 = __dirname + "/../gaming-arcade-frontend/build";
app.use(express.static(frontEndPath2));

app.get('/', (req, res)=>{
    const html = fs.readFileSync(frontEndPath2 + '/index.html').toString('utf8')
    res.send(html);
});
app.listen(port, ()=>{
    console.log('Server is running on Port: ', port);
});
