class Employee{

    constructor(name,id,basic_salary,hra,allowance){
        this.name = name;
        this.id = id;
        this.basic_salary = basic_salary;
        this.hra = hra;
        this.allowance = allowance;

    }

    getSalary() {
        return this.basic_salary+this.hra+this.allowance;
    }

}

let employee1=new Employee("Rohan",100,2000,1000,1000);
let employee2=new Employee("Divyanshu",100,200,1000,100);
console.log("employee 1 salary : ",employee1.getSalary());
console.log("employee 2 salary : ",employee2.getSalary());