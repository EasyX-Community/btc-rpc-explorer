var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var ltc = require("./coins/pexa.js");
var ltc = require("./coins/phl.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"PEXA": pexa,
	"PHL": phl,

	"coins":["BTC", "LTC", "PEXA", "PHL"]
};
