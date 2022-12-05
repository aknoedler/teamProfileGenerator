const Intern = require('../lib/Intern');

describe("Intern", () => {

    describe("Initialization", () => {

        it("should create an object with name, ID, email, and school properties based on passed in parameters", () => {
            const intern = new Intern('John Doe', 1, 'johndoe@gmail.com', 'Northwestern');

            expect(intern.name).toEqual('John Doe');
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual('johndoe@gmail.com');
            expect(intern.school).toEqual('Northwestern');
        })

    })

    describe("getSchool", () => {

        it("should return the intern's school as a string", () => {
            const intern = new Intern('John Doe', 1, 'johndoe@gmail.com', 'Northwestern');

            expect(intern.getSchool()).toEqual('Northwestern');
        })
    })

    describe("getRole", () => {

        it("should return the string 'Intern'", () => {
            const intern = new Intern('John Doe', 1, 'johndoe@gmail.com', 'Northwestern');

            expect(intern.getRole()).toEqual('Intern');
        })

    })

});