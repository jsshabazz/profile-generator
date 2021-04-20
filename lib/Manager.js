const Employee = require("./Employee");


class Mangager 
extends Employee {
    constructor(name, id ,email, officeNumber)

{ super( name,id, email)
this.officeNumber = officeNumber

}
getRole() {
    return "Engineer"
};

}
module.export = Mangager