// Simple Student CRUD (Console Version)

// Our collection of students (array of objects)
let students = [];

// CREATE
function addStudent(id, name, course) {
  let student = { id, name, course };
  students.push(student);
  console.log("Student Added:", student);
}

// READ (Find a student by ID)
function getStudent(id) {
  let student = students.find(s => s.id === id);
  if (student) {
    console.log("Student Found:", student);
  } else {
    console.log("Student not found!");
  }
  return student;
}

// UPDATE
function updateStudent(id, newName, newCourse) {
  let student = students.find(s => s.id === id);

  if (!student) {
    console.log("Cannot update — student not found!");
    return;
  }

  if (newName) student.name = newName;
  if (newCourse) student.course = newCourse;

  console.log("Student Updated:", student);
}

// DELETE
function deleteStudent(id) {
  students = students.filter(s => s.id !== id);
  console.log("Deleted student with ID:", id);
}

// SHOW ALL RECORDS
function showAll() {
  if (students.length === 0) {
    console.log("No students available.");
    return;
  }

  console.log("All Students:");
  students.forEach(s => {
    console.log(`ID: ${s.id}, Name: ${s.name}, Course: ${s.course}`);
  });
}

// ---------------------------------------
// DEMO (Test the functions)
// ---------------------------------------

console.log("=== CRUD OPERATIONS START ===");

// Create
addStudent(101, "Aarav", "Web Development");
addStudent(102, "Diya", "AI");

// Read
getStudent(102);

// Update
updateStudent(101, "Aarav R.", "Cloud Computing");

// Delete
deleteStudent(102);

// Show all
showAll();

console.log("=== END ===");
