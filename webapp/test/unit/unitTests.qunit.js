/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"miningjson0956/vam0956_mining_json/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});