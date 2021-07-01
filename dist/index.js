(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JStest = exports.sum = void 0;
    var lib_1 = require("./lib");
    Object.defineProperty(exports, "sum", { enumerable: true, get: function () { return lib_1.sum; } });
    Object.defineProperty(exports, "JStest", { enumerable: true, get: function () { return lib_1.JStest; } });
});
