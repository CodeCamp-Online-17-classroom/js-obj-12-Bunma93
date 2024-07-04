// write code here
const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };

function checkEmployeeInfo(name) {
    if (employees[name]) {
        alert(`Name: ${name}, Salary: ${employees[name].salary}, Address: ${employees[name].address.district}, ${employees[name].address.province}`)
    } else {
        alert("Not Found");
    }
}

let name = prompt("กรอกชื่อพนักงาน");
checkEmployeeInfo(name);

