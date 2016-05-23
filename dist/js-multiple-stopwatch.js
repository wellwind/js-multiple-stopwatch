"use strict";
var TickTock = (function () {
    function TickTock() {
    }
    return TickTock;
}());
var JsMultipleStopwatch = (function () {
    function JsMultipleStopwatch() {
    }
    JsMultipleStopwatch.getTime = function () {
        return new Date().getTime();
    };
    JsMultipleStopwatch.Tick = function (name) {
        if (name === void 0) { name = this.basicName; }
        this.stopwatches[name] = new TickTock();
        this.stopwatches[name].TickTime = new Date().getTime();
    };
    JsMultipleStopwatch.Tock = function (name) {
        if (name === void 0) { name = this.basicName; }
        this.stopwatches[name].TockTime = new Date().getTime();
    };
    JsMultipleStopwatch.ElapsedTime = function (name) {
        if (name === void 0) { name = this.basicName; }
        return this.stopwatches[name].TockTime - this.stopwatches[name].TickTime;
    };
    JsMultipleStopwatch.GetStopwatch = function (name) {
        if (name === void 0) { name = this.basicName; }
        return this.stopwatches[name];
    };
    JsMultipleStopwatch.basicName = "";
    JsMultipleStopwatch.stopwatches = {};
    return JsMultipleStopwatch;
}());
module.exports = JsMultipleStopwatch;
//# sourceMappingURL=js-multiple-stopwatch.js.map