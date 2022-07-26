"use strict";
/************************* Classes */
Object.defineProperty(exports, "__esModule", { value: true });
/*
class Students {
    private _lName: string;
    private _fName: string;

    constructor(lName, fName) {
        this._lName = lName;
        this._fName = fName;
    }

    GetFullName():string {
        return this._lName + "... " + this._fName;
    }
}
*/
class Students {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    GetFullName() {
        return this.lName + "... " + this.fName;
    }
}
exports.default = Students;
//export { Students }
//# sourceMappingURL=Student.js.map