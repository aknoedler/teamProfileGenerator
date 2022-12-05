const Employee = require('../lib/Employee');

describe("Employee", () => {

    describe ("Initialization", () => {

        it("should create an object with name, ID, and email properties based on passed in parameters", () => {
            const employee = new Employee('John Doe', 1, 'johndoe@gmail.com');

            expect(employee.name).toEqual('John Doe');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('johndoe@gmail.com');
        })

    })

    describe ("getName", () => {

        it("should return the employee's name as a string", () => {
            const employee = new Employee('John Doe', 1, 'johndoe@gmail.com');

            expect(employee.getName()).toEqual('John Doe');
        })
    
    })

    describe ("getID", () => {

        it("should return the employee's ID as an int", () => {
            const employee = new Employee('John Doe', 1, 'johndoe@gmail.com');

            expect(employee.getID()).toEqual(1);
        })
        
    })

    describe ("getEmail", () => {

        it("should return the employee's email", () => {
            const employee = new Employee('John Doe', 1, 'johndoe@gmail.com');

            expect(employee.getEmail()).toEqual('johndoe@gmail.com');
        })
    
    })

    describe ("getRole", () => {

        it("should return the string 'Employee'", () => {
            const employee = new Employee('John Doe', 1, 'johndoe@gmail.com');

            expect(employee.getRole()).toEqual('Employee');
        })
        
    })

});