// const xhr = new XMLHttpRequest();
// xhr.responseType = 'json';
// xhr.open('GET', '../data/employees.json');
// xhr.send();

// xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState === 4 && xhr.status === 200) 
//     {console.log('success')}
// })

//FETCH
function newGrid() {
    let employees = [];

fetch('../data/employees.json') 
    .then ( response => response.json() )
    .then ( data => {
        
        for (let employee of data.employees) {}

        empTable.lastElementChild.remove();

        let tbody = document.createElement('tbody');

        for (let employee of data.employees) {
            tbody.innerHTML += 
            `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.empName}</td>
                <td>${employee.extension}</td>
                <td>${employee.email}</td>
                <td>${employee.department}</a></td>

                <td><button class="btn btn-sm btn-danger delete">X</button></td>
            </tr>
            `
            empCount.value++
        }
        empTable.appendChild(tbody);
    } )
    .catch( error => console.log(error.message));
console.log(employees);
}
newGrid();




