//create a program that prompts the user to
// input their grade.
// use else if statements to assign a score.

let grade = prompt("enter your grade:");
grade = parseInt(grade);

if (grade>=90) {
  console.log("excellent!"); //90 and above:
  //execellent.
} else if (grade>=80 && grade<=89) {
  console.log("Good!"); //80 to 89: good
} else if (grade>=70 && grade<=79) {
  console.log("fair"); //70-79: fair
} else {
  console.log("needs improvement"); //below 70
  //needs improvement
}
console.log(grade);