const Employee = require("../Employee");

describe("Employee", () => {
  
  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      
      const Employee = new Employee("John", 25);

      
      expect(Employee.name).toEqual("John");
      expect(Employee.age).toEqual(25);
    });

    it("should throw an error if provided no arguments", () => {
      

      const cb = () => new Employee();

      
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an age", () => {
      
      const cb = () => new Employee("John");

      
      const err = new Error("Expected parameter 'age' to be a non-negative number");

    
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      
      const cb = () => new Employee(25, 26);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is not a number", () => {
      
      const cb = () => new Employee("John", "25");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      // Act
      const cb = () => new Child("John", -1);
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      
      expect(cb).toThrowError(err);
    });
  });
});
