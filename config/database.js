const path = require("path");
module.exports = {
    development: {
        // username: "root",
        // password: null,
        storage: path.join(__dirname, "..", "development.sqlite"),
        // host: "127.0.0.1",
        dialect: "sqlite",
        operatorsAliases: false
    },
    test: {
        // username: "root",
        // password: null,
        storage: path.join(__dirname, "..", "test.sqlite"),
        // host: "127.0.0.1",
        dialect: "sqlite",
        operatorsAliases: false
    },
    production: {
        // username: "root",
        // password: null,
        storage: path.join(__dirname, "..", "productions.sqlite"),
        // host: "127.0.0.1",
        dialect: "sqlite",
        operatorsAliases: false
    }
};
