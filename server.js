var express = require('express');
var app = express();
var fs = require("fs");
var rates = require("./rates_fetcher_module");

app.get('/all_currency_rates', function (req, res) {
  fs.readFile( __dirname + "/" + "currency_rates.json", 'utf8', function (err, data) {
    res.end(data);
  });
})

app.get('/curr_rate/src_curr=:src_id&&target_curr=:tar_id', function (req, res) {
  fs.readFile( __dirname + "/" + "currency_rates.json", 'utf8', function (err, data) {
      to_be_sent_data = {};
      to_be_sent_data.disclaimer = "Usage subject to terms: https://openexchangerates.org/terms";
      to_be_sent_data.license = "https://openexchangerates.org/license";
      to_be_sent_data.timestamp = Math.floor(Date.now() / 1000);
      to_be_sent_data.base_currency = req.params.src_id;
      to_be_sent_data.target_currency = req.params.tar_id;
      var currs = JSON.parse(data);
      var src_curr = currs[req.params.src_id];
      var final_rate = src_curr[req.params.tar_id];
      console.log(final_rate);
      to_be_sent_data.rate = final_rate;
      res.end(JSON.stringify(to_be_sent_data));
  });
})

app.get('/curr_conv/src_curr=:src_id&&target_curr=:tar_id&&value=:val', function (req, res) {
  fs.readFile( __dirname + "/" + "currency_rates.json", 'utf8', function (err, data) {
      to_be_sent_data = {};
      to_be_sent_data.disclaimer = "Usage subject to terms: https://openexchangerates.org/terms";
      to_be_sent_data.license = "https://openexchangerates.org/license";
      to_be_sent_data.timestamp = Math.floor(Date.now() / 1000);
      to_be_sent_data.base_currency = req.params.src_id;
      to_be_sent_data.target_currency = req.params.tar_id;
      var currs = JSON.parse(data);
      var src_curr = currs[req.params.src_id];
      var final_rate = src_curr[req.params.tar_id];
      // console.log(final_rate);
      to_be_sent_data.rate = final_rate;
      to_be_sent_data.converted_value = final_rate*req.params.val;
      console.log(to_be_sent_data.converted_value);
      res.end(JSON.stringify(to_be_sent_data));
  });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})