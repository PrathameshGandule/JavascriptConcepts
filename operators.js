
// ARITHMETIC OPERATORS
// +, -, /, *, %, **

let student = 30;
student = student + 1   //also can be student++;
student = student - 1
student = student * 2
student = student / 2
student = student ** 3

// AUGMENTED ASSIGNMENT OPERATORS
student += 1
student -= 1
student *= 2
student /= 2
student **= 2
student %= 4

student++
student--

let extrastudents = student % 4
console.log(student);

/*
    LOGICAL OPERATORS IN JAVASCRIPT
    same as other languages
    && - and
    || - or
     !  - not
*/

/*
    = assignment operator
    == equality operator (checks only values)
    != inequality operator
    === strictly inequal operator(checks values and datatype too)
    !== strictly unequal operator
*/

const PI = 3.14

if(PI === 3.14){
    console.log(`That is PI`)
}else{
    console.log(`That is NOT PI`)
}