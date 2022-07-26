/************************* Classes */

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
export default class Students {
    constructor(private fName:string, private lName:string) {
    }

    GetFullName():string {
        return this.lName + "... " + this.fName;
    }
}



//export { Students }
