const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    describe ("Initialization", () => {

        it("should create an object with name, ID, email, and github properties based on passed in parameters", () => {
            const engineer = new Engineer('John Doe', 1, 'johndoe@gmail.com', 'johndoe');

            expect(engineer.name).toEqual('John Doe');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('johndoe@gmail.com');
            expect(engineer.github).toEqual('johndoe');
        })

    })

    describe("getGithub", () => {

        it("should return the engineers's github as a string", () => {
            const engineer = new Engineer('John Doe', 1, 'johndoe@gmail.com', 'johndoe');

            expect(engineer.getGithub()).toEqual('johndoe');
        })

    })

    describe ("getRole", () => {

        it("should return the string 'Engineer'", () => {
            const engineer = new Engineer('John Doe', 1, 'johndoe@gmail.com', 'johndoe');

            expect(engineer.getRole()).toEqual('Engineer');
        })
        
    })

});