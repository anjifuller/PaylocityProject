"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.isEmpty = function () {
        return !(this.firstName || this.lastName || this.ssn);
    };
    Person.prototype.isValid = function () {
        if (this.firstName && this.lastName) {
            return true;
        }
        else {
            return false;
        }
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.model.js.map