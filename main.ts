interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 21,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Create and render table
  const table = document.createElement("table");
  const thead = table.createTHead();
  const tbody = document.createElement("tbody");
  
  const headerRow = thead.insertRow();
  ["First Name", "Location"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  
  studentsList.forEach((student) => {
    const row = tbody.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  