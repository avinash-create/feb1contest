// Given array of student objects
const students = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
  ];
  
  // Task 1: PrintStudentbyMap() - console.log all students with marks over 50 using the .map function
  function PrintStudentbyMap(students) {
    const passedStudents = students
      .filter(student => student.marks > 50)
      .map(student => student.name);
    console.log("Students with marks over 50 (using .map):", passedStudents);
  }
  
  PrintStudentbyMap(students);
  
  // Task 2: PrintStudentbyForEach() - console.log all students who have marks over 50 using the .forEach function
  function PrintStudentbyForEach(students) {
    students.forEach(student => {
      if (student.marks > 50) {
        console.log(`Student ${student.name} has marks over 50.`);
      }
    });
  }
  
  PrintStudentbyForEach(students);
  
  // Task 3: addData() - Create another student object and append it to the array
  function addData(students) {
    const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
    students.push(newStudent);
    console.log("New student added:", newStudent);
  }
  
  addData(students);
  
  // Task 4: removeFailedStudent() - Remove the student who has failed (marks < 50)
  function removeFailedStudent(students) {
    const filteredStudents = students.filter(student => student.marks >= 50);
    console.log("Students after removing failed ones:", filteredStudents);
  }
  
  removeFailedStudent(students);
  
  // Task 5: ConcatenateArray() - Create another array with 3 student objects
  function ConcatenateArray(students) {
    const additionalStudents = [
      { id: 5, name: "alice", age: "21", marks: 70 },
      { id: 6, name: "bob", age: "22", marks: 60 },
      { id: 7, name: "eve", age: "20", marks: 55 }
    ];
  
    const concatenatedArray = students.concat(additionalStudents);
    console.log("Concatenated array of students:", concatenatedArray);
  }
  
  ConcatenateArray(students);
  