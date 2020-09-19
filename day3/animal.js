"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal() {
        this.leg = 4; // state
    }
    Animal.prototype.eat = function () { }; // behaviour
    Animal.prototype.run = function () {
        this.leg = this.leg + 1;
    };
    Animal.prototype.walk = function () { };
    Animal.prototype.onLocation = function () {
    };
    return Animal;
}());
exports.Animal = Animal;
