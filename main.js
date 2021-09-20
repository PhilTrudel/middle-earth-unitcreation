import '/main.scss'

let addMagic = document.querySelector('.magic');
let addItem = document.querySelector('.item');
let removeMagic = document.querySelector('.lessMagic');
let removeItem = document.querySelector('.lessItem');


addMagic.addEventListener("click", function() {
    const newRow = document.createElement('tr')
    newRow.className = "text-center"
    newRow.innerHTML = `
    <th scope="row"><input type="text" class="form-control" placeholder="Power"></th>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="..."></td>`
    document.getElementById('tableMagic').appendChild(newRow);
});

addItem.addEventListener("click", function() {
    const newRow = document.createElement('tr')
    newRow.className = "text-center"
    newRow.innerHTML = `
    <th scope="row"><input type="text" class="form-control" placeholder="Power"></th>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="..."></td>`
    document.getElementById('tableItem').appendChild(newRow);
});

removeMagic.addEventListener("click", function() {
    const tableMagic = document.getElementById('tableMagic')
    tableMagic.removeChild(tableMagic.lastElementChild)
});

removeItem.addEventListener("click", function() {
    const tableItem = document.getElementById('tableItem')
    tableItem.removeChild(tableItem.lastElementChild)
});