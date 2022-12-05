const Manager = require('../lib/Manager');

describe("Manager", () => {

    describe ("Initialization", () => {

        it("should create an object with name, ID, email and office number properties based on passed in parameters", () => {
            const manager = new Manager('John Doe', 1, 'johndoe@gmail.com', 1);

            expect(manager.name).toEqual('John Doe');
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual('johndoe@gmail.com');
            expect(manager.officeNumber).toEqual(1);
        })

    })

    describe("getRole", () => {
        
        it("should return the string 'Manager'", () => {
            const manager = new Manager('John Doe', 1, 'johndoe@gmail.com');

            expect(manager.getRole()).toEqual('Manager');
        })

    })

});