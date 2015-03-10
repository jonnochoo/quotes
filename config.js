var config = module.exports;
var PRODUCTION = process.env.NODE_ENV === "production";

config.quoteUrl = 'http://quotes.jonnochoo.com/';
config.express = {
    port: process.env.EXPRESS_PORT || 3000
};

if (PRODUCTION) {
    config.express = {
        port: process.env.PORT
    };
}
