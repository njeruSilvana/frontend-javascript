interface Student{
    firstName: string;
    lastName: string;
    age:number;
    location:string;
}

const student1: Student = {
    firstName: "Ayla",
    lastName: "Muthoni",
    age: 21,
    location: "Kenya"

}

const student2: Student = {
    firstName: "Amaya",
    lastName: "Papaya",
    age: 21,
    location: "Australia"

}

const studentsList: Array< Student>=[student1, student2];

// Render a table using Vanilla JavaScript
const body: HTMLBodyElement = document.body;
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

// Add a header row (optional, for better presentation)
const thead: HTMLTableSectionElement = document.createElement('thead');
const headerRow: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableHeaderCellElement = document.createElement('th');
const th2: HTMLTableHeaderCellElement = document.createElement('th');

th1.textContent = 'First Name';
th2.textContent = 'Location';
headerRow.appendChild(th1);
headerRow.appendChild(th2);
thead.appendChild(headerRow);
table.appendChild(thead);

// Loop through each student and create table rows
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement('tr');
  
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  
  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
body.appendChild(table);