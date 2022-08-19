

function employee(id, fullName, department, level, img) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    this.salary = this.calcSalary(this.level);
}

employee.prototype.calcSalary = function (level) {
    if (level == "Junior" || level == "junior") {
        return 500 + Math.floor(Math.random() * 500);
    }
    else if (level == "Mid-Senior" || level == "mid-senior") {
        return 1000 + Math.floor(Math.random() * 500);

    }
    else if (level == "Senior" || level == "senior") {
        return 1500 + Math.floor(Math.random() * 500);
    }
    else {
        return alert("Sorry, you entered a wrong employee level");
    }
}

// ____________ Table construction ____________

// const main = document.querySelector("main");
// const table = document.createElement("table");
// main.appendChild(table);
// const tableheadrow = document.createElement("tr");
// table.appendChild(tableheadrow);


// const employeeID = document.createElement("th");
// const fullName = document.createElement("th");
// const department = document.createElement("th");
// const level = document.createElement("th");
// const salary = document.createElement("th");

// employeeID.append("Employee ID");
// fullName.append("Full Name");
// department.append("Department");
// level.append("Level");
// salary.append("salary");

// tableheadrow.append(employeeID, fullName, department, level, salary);


//  display stored data
let allEmployees = [];
let empArr = JSON.parse(localStorage.getItem('Employees'));
console.log(empArr);
if (empArr !== null) {
    allEmployees = empArr;
    for (let i = 0; i < empArr.length; i++) {
        addRow(empArr[i]);
        addCard(empArr[i]);
    }

}
const form = document.getElementById("form");
form.addEventListener('submit', formToTable);
function formToTable(event) {
    event.preventDefault();
    let empId = document.getElementById("id").value;
    let empName = document.getElementById("fullName").value;
    let empDep = document.getElementById("department").value;
    let empLvl = document.getElementById("level").value;
    let empImg = document.getElementById("image").value;
    let newEmp = new employee(empId, empName, empDep, empLvl, empImg);
    allEmployees.push(newEmp)
    addRow(newEmp);
    addCard(newEmp);
    localStorage.setItem('Employees', JSON.stringify(allEmployees));
    document.forms[0].reset();
}
function addRow(obj) {
    const table = document.getElementById("table");
    let tL = table.rows.length;
    let row = table.insertRow(tL);
    let col1 = row.insertCell(0);
    col1.innerHTML = obj.id;

    let col2 = row.insertCell(1);
    col2.innerHTML = obj.fullName;

    let col3 = row.insertCell(2);
    col3.innerHTML = obj.department;

    let col4 = row.insertCell(3);
    col4.innerHTML = obj.level;

    let col5 = row.insertCell(4);
    col5.innerHTML = obj.salary;
}

function addCard(obj) {
    let cards = document.getElementById("cards");
    let card = document.createElement("div");
    cards.appendChild(card);
    card.classList.add('col-md-3');

    let cardImg = document.createElement("img");
    card.appendChild(cardImg);
    cardImg.setAttribute("src", obj.img);
    cardImg.setAttribute("width", "100px");
    cardImg.classList.add('col-md-3');

    let p1 = document.createElement("p");
    card.appendChild(p1);
    p1.textContent = obj.fullName + "| " + obj.id;

    let p2 = document.createElement("p");
    card.appendChild(p2);
    p2.textContent = "Department: " + obj.department;

    let p3 = document.createElement("p");
    card.appendChild(p3);
    p3.textContent = "Level: " + obj.level;


    let p4 = document.createElement("p");
    card.appendChild(p4);
    p4.textContent = "Salary: " + obj.salary;

}



// ________ define clear all button ___________
const clearAll = document.getElementById("clearAll");
clearAll.addEventListener('click', () => localStorage.clear());

