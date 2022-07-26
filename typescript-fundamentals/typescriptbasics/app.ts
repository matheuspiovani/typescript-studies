
import { IStudentInfo } from './IStudentInfo'
import Students from './Student'

console.log("Hii!");

let a:boolean = true;
let b:string = "HI";
let c:Number = 10;

console.log(a);
console.log(b);
console.log(c);

// Arrays and enums
enum LanguagesKnow { English, Portuguese }

let student:IStudentInfo = {
    Name: "Matheus",
    Age: 28,
    Phone: 2342342,
    Language: LanguagesKnow[LanguagesKnow.English]
}

let studentsList:IStudentInfo[] = [
    {Name: "A", Age: 1, Phone: 123123, Language: LanguagesKnow[LanguagesKnow.English]},
    {Name: "B", Age: 1, Phone: 1231234, Language: LanguagesKnow[LanguagesKnow.Portuguese]},
    {Name: "C", Age: 1, Phone: 1231234, Language: LanguagesKnow[LanguagesKnow.English]},
]

studentsList.push(student);

// Functions
function GetStudentsList(students: IStudentInfo[]) {
    students.forEach(el => {
        console.log(el.Name + " " + el.Language);
    })
}

GetStudentsList(studentsList);

//Rest Parameters
function GetNumbers(...nums: number[]){
    nums.forEach(el => {
        console.log("Number: " + el);
    })
}

GetNumbers(1,2,3,4,5,6);

//Default parametsers
function GetInfo(info:string = "Happy"){
    console.log(info);
}

GetInfo("Not Happy");
GetInfo();

//################### Functions advanced ########

//Anonymous function
let StudentName = function (lName: string, fName: string) {
    return fName + "... " + lName;
}

console.log(StudentName("Matheus", "Piovani"));

//Arrow function
let StudentFullName = (lName: string, fName: string) => { return fName + "... " + lName};

console.log(StudentFullName("Matheus", "Piovani"))

let s = new Students("Matheus", "Piovani")
console.log(s.GetFullName());


//*** Generics */
//Function declaration

let studentsListG:Array<IStudentInfo> = [
    {Name: "A", Age: 1, Phone: 123123, Language: LanguagesKnow[LanguagesKnow.English]},
    {Name: "B", Age: 1, Phone: 1231234, Language: LanguagesKnow[LanguagesKnow.Portuguese]},
    {Name: "C", Age: 1, Phone: 1231234, Language: LanguagesKnow[LanguagesKnow.English]},
]

function GetStudentsListGenerics(students: Array<IStudentInfo>) {
    students.forEach(el => {
        console.log(el.Name + " " + el.Language);
    })
}

GetStudentsListGenerics(studentsListG);
