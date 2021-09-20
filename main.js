import '/main.scss'

let addMagic = document.querySelector('.magic');
let addItem = document.querySelector('.item');
let removeMagic = document.querySelector('.lessMagic');
let removeItem = document.querySelector('.lessItem');
let addHero = document.querySelector('.addHero');
let removeHero = document.querySelector('.removeHero');


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
    <th scope="row"><input type="text" class="form-control" placeholder="Item"></th>
    <td><input type="text" class="form-control" placeholder="..."></td>`
    document.getElementById('tableItem').appendChild(newRow);
});

addHero.addEventListener("click", function() {
    const newRow = document.createElement('tr')
    newRow.className = "text-center"
    newRow.innerHTML = `
    <th scope="row"><input type="text" class="form-control-xs" placeholder="Hero"></th>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="0/9"></td>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="0-9"></td>`
    document.getElementById('tableHero').appendChild(newRow);
});

removeMagic.addEventListener("click", function() {
    const tableMagic = document.getElementById('tableMagic')
    tableMagic.removeChild(tableMagic.lastElementChild)
});

removeItem.addEventListener("click", function() {
    const tableItem = document.getElementById('tableItem')
    tableItem.removeChild(tableItem.lastElementChild)
});

removeHero.addEventListener("click", function() {
    const tableHero = document.getElementById('tableHero')
    tableHero.removeChild(tableHero.lastElementChild)
});