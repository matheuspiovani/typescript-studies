"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
console.log("Hii!");
let a = true;
let b = "HI";
let c = 10;
console.log(a);
console.log(b);
console.log(c);
// Arrays and enums
var LanguagesKnow;
(function (LanguagesKnow) {
    LanguagesKnow[LanguagesKnow["English"] = 0] = "English";
    LanguagesKnow[LanguagesKnow["Portuguese"] = 1] = "Portuguese";
})(LanguagesKnow || (LanguagesKnow = {}));
let student = {
    Name: "Matheus",
    Age: 28,
    Phone: 2342342,
    Language: LanguagesKnow[LanguagesKnow.English]
};
let studentsList = [
    { Name: "A", Age: 1, Phone: 123123, Language: LanguagesKnow[LanguagesKnow.English] },
    { Name: "B", Age: 1, Phone: 1231234, Language: LanguagesKnow[LanguagesKnow.Portuguese] },
    { Name: "C", Age: 1, Phone: 1231234, Language: LanguagesKnow[LanguagesKnow.English] },
];
studentsList.push(student);
// Functions
function GetStudentsList(students) {
    students.forEach(el => {
        console.log(el.Name + " " + el.Language);
    });
}
GetStudentsList(studentsList);
//Rest Parameters
function GetNumbers(...nums) {
    nums.forEach(el => {
        console.log("Number: " + el);
    });
}
GetNumbers(1, 2, 3, 4, 5, 6);
//Default parametsers
function GetInfo(info = "Happy") {
    console.log(info);
}
GetInfo("Not Happy");
GetInfo();
//################### Functions advanced ########
//Anonymous function
let StudentName = function (lName, fName) {
    return fName + "... " + lName;
};
console.log(StudentName("Matheus", "Piovani"));
//Arrow function
let StudentFullName = (lName, fName) => { return fName + "... " + lName; };
console.log(StudentFullName("Matheus", "Piovani"));
let s = new Student_1.default("Matheus", "Piovani");
console.log(s.GetFullName());
//*** Generics */
//Function declaration
let studentsListG = [
    { Name: "A", Age: 1, Phone: 123123, Language: LanguagesKnow[LanguagesKnow.English] },
    { Name: "B", Age: 1, Phone: 1231234, Language: LanguagesKnow[LanguagesKnow.Portuguese] },
    { Name: "C", Age: 1, Phone: 1231234, Language: LanguagesKnow[LanguagesKnow.English] },
];
function GetStudentsListGenerics(students) {
    students.forEach(el => {
        console.log(el.Name + " " + el.Language);
    });
}
GetStudentsListGenerics(studentsListG);
//# sourceMappingURL=app.js.map