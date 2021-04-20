const Engineer = require("../Engineer");
const Employee = require("../Employee");
const Employee = require("../lib/Employee");
const Employee = require("../lib/Employee");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with 'Employee' array, 'capacity' number, and 'ageLimit' number", () => {
      const Engineer = new Engineer();

      
      expect(Engineer).toEqual({ Employee: [], name: 'John', id: [], email: '@gmail', github:'' });
    });
  });

  describe("addEmployee", () => {
    it("should add a Engineer to the 'Employee' array", () => {
    
      const Employee = new Employee("John", 25);
      const Engineer = new Engineer();

    
      Engineer.addEmployee(Employee);

     
      expect(Engineer.Employee.length).toEqual(1);
      expect(Engineer.Employee[0]).toBe(Employee);
    });

    it("should not add a employee over the 'ageLimit'", () => {
      const Employee = new Employee("Chip", 48);
      const Engineer = new Engineer();

      Engineer.addEmployee(Employee);

  
      expect(Engineer.Employee.length).toEqual(0);
    });

    it("should not add a employee if already at capacity", () => {
      const Engineer = new Engineer();
      const Employee = new Employee("Mark", 34);

      
      Engineer.Employee = [
        new Employee("John", 25),
        new Employee("Chip", 48),
        new Employee("Mark", 34)
      ];

      Engineer.addEmployee(Employee);

      
      expect(dayCare.children.length).toEqual(3);
    });

    it("should throw an error if not provided an Employee object as an argument", () => {
      
      const err = new Error(
        "Expected parameter 'Employee' to be an instance of Employee"
      );

      
      const cb = () => {
        const Engineer = new Engineer();
        Engineer.addEmployee();
      };

      
      expect(cb).toThrowError(err);
    });
  });

  
      expect(Engineer.Employee).toEqual([Employee1, Employee2, Employee3]);
    });
  
