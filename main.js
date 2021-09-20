import '/main.scss'

let addMagic = document.querySelector('.magic');
let addItem = document.querySelector('.item');
let tableMagic = document.querySelector('.tableMagic');
let tableItem = document.querySelector('.tableItem');
let removeMagic = document.querySelector('.lessMagic');
let removeItem = document.querySelector('.lessItem');


addMagic.addEventListener("click", function() {
    tableMagic.innerHTML +=
    `<tr class="text-center">
    <th scope="row"><input type="text" class="form-control" placeholder="Power"></th>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="..."></td>
    </tr>`;
});

addItem.addEventListener("click", function() {
    tableItem.innerHTML +=
    `<tr class="text-center">
    <th scope="row"><input type="text" class="form-control" placeholder="Item"></th>
    <td><input type="text" class="form-control" placeholder="..."></td>
    </tr>`
    
});

removeMagic.addEventListener("click", function() {
    tableMagic.innerHTML -=
    `<tr class="text-center">
    <th scope="row"><input type="text" class="form-control" placeholder="Power"></th>
    <td><input type="text" class="form-control" placeholder="0-9"></td>
    <td><input type="text" class="form-control" placeholder="..."></td>
    </tr>`;
});

removeItem.addEventListener("click", function() {
    tableItem.innerHTML -=
    `<tr class="text-center">
    <th scope="row"><input type="text" class="form-control" placeholder="Item"></th>
    <td><input type="text" class="form-control" placeholder="..."></td>
    </tr>`
    
});