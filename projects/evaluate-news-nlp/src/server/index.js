var path = require('path')
const express = require('express')
var cors = require("cors");
// const fetch = require('node-fetch');


// use it before all route definitions
const mockAPIResponse = require('./mockAPI.js')
const API_KEY='469576840c3f66ca0c260c94b852f951'
console.log(`Your API key is serverside ${API_KEY}`);

const app = express()

app.use(express.static('dist'))
app.use(cors({ origin: ["http://localhost:8080", "http://127.0.0.1:5500"] }));
app.use(express.json({ limit: "1mb" }));

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', function async (req, res) {
    // console.log((req.body))
    // let text = req.body.text
    // let sentiment= sendRequest()
    // let json = {
    //   title: "test json response",
    //   message: "this is a message",
    //   time: "now",
    // };
    res.send({
        message:'server is running'
    })
})

async function sendRequest(text){
//     const formdata = new FormData();
// formdata.append("key", API_KEY);
// formdata.append("txt", text);
// formdata.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: {
      key:API_KEY,
      txt:text,
      lang:'en'
  },
  redirect: 'follow'
}
const response = await fetch(
  "https://api.meaningcloud.com/sentiment-2.1",
  requestOptions
);

console.log(response)

}