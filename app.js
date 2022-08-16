function employee(id, fullName, department, level, img, salary) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    this.salary = function () {
        if (this.level == "Junior" || this.level == "junior") {
            return 500 + Math.floor(Math.random() * 500)
        }
        else if (this.level == "Mid-Senior" || this.level == "mid-senior") {
            return 1000 + Math.floor(Math.random() * 500)

        }
        else if (this.level == "Senior" || this.level == "senior") {
            return 1500 + Math.floor(Math.random() * 500)
        }
        else {
            return alert("Sorry, you entered a wrong employee level")
        }
    }
}


const staff = [];
// Array of objects
staff[0] = new employee(1000, "Ghazi Samer", "Administration", "Senior", "https://blog.hubspot.com/hubfs/employee-retention-rate.jpg")
staff[1] = new employee(1001, "Lana Ali", "Finance", "Senior", "https://www.capsulink.com/assets/img/features-mdm/api-for-developers.svg")
staff[2] = new employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://www.capsulink.com/assets/img/features-mdm/api-for-developers.svg")
staff[3] = new employee(1003, "ٍSaif Walid ", "Administration", "Mid-Senior", "https://blog.hubspot.com/hubfs/employee-retention-rate.jpg")
staff[4] = new employee(1004, "Omar Zaid", "Development", "Senior", "https://blog.hubspot.com/hubfs/employee-retention-rate.jpg")
staff[5] = new employee(1005, "Rana Saleh", "Development", "Junior", "https://www.capsulink.com/assets/img/features-mdm/api-for-developers.svg")
staff[6] = new employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://blog.hubspot.com/hubfs/employee-retention-rate.jpg")


// function employeesData(obj) {
//     for (let i = 0; i < obj.length; i++) {
//         console.table(obj[i]);
//         console.log("Salary is: " + obj[i].salary());
//     }
// }
// employeesData(staff);

// _______________ DOM AND ADD ELEMENTS ____________________



// ____________ Table construction ____________

const main = document.querySelector("main");
const table = document.createElement("table");
main.appendChild(table);
const tableheadrow = document.createElement("tr");
table.appendChild(tableheadrow);


const employeeID = document.createElement("th");
const fullName = document.createElement("th");
const department = document.createElement("th");
const level = document.createElement("th");
const salary = document.createElement("th");

employeeID.append("Employee ID");
fullName.append("Full Name");
department.append("Department");
level.append("Level");
salary.append("salary");

tableheadrow.append(employeeID, fullName, department, level, salary);

function addrows(array) {

    const table = document.querySelector("main table")

    for (let i = 0; i < array.length; i++) {

        let row = table.insertRow(i + 1);
        let id = row.insertCell(0)
        id.innerHTML = (array[i].id);

        let name = row.insertCell(1);
        name.innerHTML = (array[i].fullName);

        let department = row.insertCell(2);
        department.innerHTML = (array[i].department);

        let level = row.insertCell(3);
        level.innerHTML = (array[i].level);

        let salary = row.insertCell(4);
        salary.innerHTML = (array[i].salary())
    }

}

addrows(staff);

const form = document.getElementById("form").addEventListener('submit', function (event) {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const fname = document.getElementById("fullName").value;
    const department = document.getElementById("department").value;
    const level = document.getElementById("level").value;
    const img = document.getElementById("image").value;
    staff.push(new employee(id, fname, department, level, img));

    let table = document.querySelector("table");

    let rowcount = table.rows.length;
    let row = table.insertRow(rowcount);

    let newid = row.insertCell(0)
    newid.innerHTML = (id);

    let newname = row.insertCell(1);
    newname.innerHTML = (fname);

    let newdepartment = row.insertCell(2);
    newdepartment.innerHTML = (department);

    let newlevel = row.insertCell(3);
    newlevel.innerHTML = (level);

    let newsalary = row.insertCell(4);
    newsalary.innerHTML = (staff[staff.length - 1].salary());

    id = "";
    fname.value = "";
    department.value = "";
    level.value = "";
    img.value = "";
}
);




