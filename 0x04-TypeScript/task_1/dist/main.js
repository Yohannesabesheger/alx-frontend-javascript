// Example usage
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Function implementation
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Implementing the class
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example usage
var student = new StudentClass({ firstName: "Jane", lastName: "Smith" });
console.log(student.displayName()); // Output: Jane
console.log(student.workOnHomework()); // Output: Currently working
//# sourceMappingURL=main.js.map