//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul]; 

function getAverateGrade(student, course) {
 
  for ( let trans of student.transcript) {
    let sum = 0;
    for (let grades of trans.grades) {
      sum += grades; 
    }
      return sum / trans.grades.length;
  }
} 

console.log(getAverateGrade(bob, 'INFO 1601')); 

function getAssignmentMark(student, course, num) {


}

console.log(getAssignmentMark(bob, 'INFO 1601')); 