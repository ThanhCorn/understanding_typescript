class Department {
    name: string;
    employees: string[] = [];
    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string,admins: string[] ) {
        super(id);
        this.admins = admins
    }
}

class AccoutingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id)
    this.reports = reports
  }

  addReport(text: string){
    this.reports.push(text)
  }

  printReport(){
    console.log(this.reports);
    
  }
}
const accounting2 = new AccoutingDepartment('d2', [])
accounting2.addReport('Something went wrong...')

const accounting1 = new ITDepartment('d1', ['Ngoc Thanh']);

const accounting  = new Department('Accounting');
accounting.describe();  // Department: Accounting

const accountingCopy = {describe: accounting.describe};
