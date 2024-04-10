// Logical Program: Grade Calculation**
// Suppose a student's marks are stored in variables **`subject1 = 85`** and **`subject2 = 90`**. Calculate the average marks and determine the grade according to the following conditions:
//     - Average Marks >= 90: Grade A
//     - Average Marks >= 80: Grade B
//     - Average Marks >= 70: Grade C
//     - Average Marks >= 60: Grade D
//     - Otherwise: Grade F

const subject1 = 85;
const subject2 = 65;
const subject3 = 70;
const subject4 = 80;
const subject5 = 92;

const total=subject1+subject2+subject3+subject4+subject5;
const average=total/5;

if(average>=90){
    console.log("Grade A");
}else if(average>=80){
    console.log("Grade B");

}else if(average>=70){
    console.log("Grade C");

}else if(average>=60){
    console.log("Grade D");

}else{
    console.log("Fail");
}