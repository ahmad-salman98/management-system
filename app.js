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
// Array od objects
staff[0] = new employee(1000, "Ghazi Samer", "Administration", "Senior", "https://blog.hubspot.com/hubfs/employee-retention-rate.jpg")
staff[1] = new employee(1000, "Lana Ali", "Finance", "Senior", "https://www.capsulink.com/assets/img/features-mdm/api-for-developers.svg")
staff[2] = new employee(1000, "Tamara Ayoub", "Marketing", "Senior", "https://www.capsulink.com/assets/img/features-mdm/api-for-developers.svg")
staff[3] = new employee(1000, "ٍSaif Walid ", "Administration", "Mid-Senior", "https://blog.hubspot.com/hubfs/employee-retention-rate.jpg")
staff[4] = new employee(1000, "Omar Zaid", "Development", "Senior", "https://blog.hubspot.com/hubfs/employee-retention-rate.jpg")
staff[5] = new employee(1000, "Rana Saleh", "Development", "Junior", "https://www.capsulink.com/assets/img/features-mdm/api-for-developers.svg")
staff[6] = new employee(1000, "Hadi Ahmad", "Finance", "Mid-Senior", "https://blog.hubspot.com/hubfs/employee-retention-rate.jpg")


function employeesData(obj) {
    for (let i = 0; i < obj.length; i++) {
        console.table(obj[i]);
        console.log("Salary is: " + obj[i].salary());
    }
}
employeesData(staff);


