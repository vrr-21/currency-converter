exports.getCurrencyRates = function(){
    console.log("Module called.");
    var Request = require("request");
    var fs = require("fs");
    var full_currency_rates = {};
    Request.get("https://openexchangerates.org/api/latest.json?app_id=6c1dcc1f4c8642cea6969127a4768346", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        currency_json = JSON.parse(body);
        currency_rates = currency_json.rates;
        for(var i=0;i<Object.keys(currency_rates).length;i++)
        {
            var rel_currency_rates = {};
            // console.dir(currency_rates[Object.keys(currency_rates)[i]])
            for(var j=0;j<Object.keys(currency_rates).length;j++)
            {
                rel_currency_rates[Object.keys(currency_rates)[j]] = (1/currency_rates[Object.keys(currency_rates)[i]])*currency_rates[Object.keys(currency_rates)[j]];
            }
            full_currency_rates[Object.keys(currency_rates)[i]] = rel_currency_rates;
        }
        // console.dir(full_currency_rates);
        fs.writeFile("./currency_rates.json", JSON.stringify(full_currency_rates, null, 4), (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });
    });
};
