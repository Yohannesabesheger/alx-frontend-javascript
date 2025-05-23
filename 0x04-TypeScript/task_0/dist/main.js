var student1 = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 21,
    location: "New York"
};
var student2 = {
    firstName: "Bob",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};
var studentsList = [student1, student2];
// Create and render table
var table = document.createElement("table");
var thead = table.createTHead();
var tbody = document.createElement("tbody");
var headerRow = thead.insertRow();
["First Name", "Location"].forEach(function (text) {
    var th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
});
studentsList.forEach(function (student) {
    var row = tbody.insertRow();
    var firstNameCell = row.insertCell();
    var locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
table.appendChild(tbody);
document.body.appendChild(table);
//# sourceMappingURL=main.js.map