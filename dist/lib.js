(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JStest = exports.sum = void 0;
    function sum(num1, num2) {
        return num1 + num2;
    }
    exports.sum = sum;
    class JStest {
        constructor({ name = '', surname = '' }) {
            this.name = name;
            this.surname = surname;
        }
        fullName() {
            return `${this.name} ${this.surname}`;
        }
    }
    exports.JStest = JStest;
});
