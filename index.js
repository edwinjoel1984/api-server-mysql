var assert = require('assert');
var env = require('node-env-file');

process.env.FOO = "defaultfoo";

// Load any undefined ENV variables from a specified file.
env(__dirname + '/.env');
assert.equal(process.env.DB_HOST, "localhost");
assert.equal(process.env.DB_USERNAME, "root");
assert.equal(process.env.DB_PASSWORD, "");
assert.equal(process.env.DB_NAME, "simplertapp");
