var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var pexa = require("./coins/pexa.js");
var phl = require("./coins/phl.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"PEXA": pexa,
	"PHL": phl,

	"coins":["BTC", "LTC", "PEXA", "PHL"]
};
