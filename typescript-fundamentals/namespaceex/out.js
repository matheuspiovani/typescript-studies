var StudentCalc;
(function (StudentCalc) {
    function AnualFeeCalc(feeamount, term) {
        return feeamount * term;
    }
    StudentCalc.AnualFeeCalc = AnualFeeCalc;
})(StudentCalc || (StudentCalc = {}));
/// <reference path="./StudentCalc.ts" />
let totalFee = StudentCalc.AnualFeeCalc(1000, 4);
console.log(totalFee);
