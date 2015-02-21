var config = module.exports;
var PRODUCTION = process.env.NODE_ENV === "production";

config.mongodb = {
  connectionString: "",
  port: process.env.MONGODB_PORT || 27017,
  host: process.env.MONGODB_HOST || 'localhost'
};

config.express = {
    port: process.env.EXPRESS_PORT || 3000
};

if (PRODUCTION) {
    config.express = {
        port: process.env.PORT
    };
}
