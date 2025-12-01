// Teacher interface with special properties
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Test the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// ========== TASK 2: Extending the Teacher class ==========

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// ========== TASK 3: Printing teachers ==========

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// ========== TASK 4: Writing a class ==========

// Interface for the constructor (describes constructor parameters)
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class (describes the class structure)
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test the StudentClass
const student1: StudentClassInterface = new StudentClass("Alice", "Johnson");
console.log(student1.displayName());  // Should print: Alice
console.log(student1.workOnHomework());  // Should print: Currently working

const student2: StudentClassInterface = new StudentClass("Bob", "Smith");
console.log(student2.displayName());  // Should print: Bob
console.log(student2.workOnHomework());  // Should print: Currently working

// Additional test to show all properties work
console.log(`Student: ${student1.firstName} ${student1.lastName}`);  // Alice Johnson