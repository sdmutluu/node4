const express = require ("express")
const bodyParser = require("body-parser")
const request = require("request")
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){ 
  var today = new Date();
  if (today.getDay() === 6 || today.getDay() === 0 ){
    res.send("Haftasonu")
  } else {
    res.send("5 günlük epik patronlar günününe hoşgenldiniz");
  }
})

app.listen(2071, function () {
    console.log("server 2071 hedefi çalışıyor");
})
