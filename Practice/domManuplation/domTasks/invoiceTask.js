const table = document.createElement('table');
table.setAttribute('cellspacing', '0px')
document.body.append(table);

const tr1 = document.createElement('tr');
table.append(tr1);

const th1 = document.createElement('th');
th1.innerText = 'Items'
tr1.append(th1);

const th2 = document.createElement('th');
th2.innerText = 'Quantity'
tr1.append(th2);

const th3 = document.createElement('th');
th3.innerText = 'Price'
tr1.append(th3);

const th4 = document.createElement('th');
th4.innerText = 'Total'
tr1.append(th4);

let idOfRow = 1;


const tr = document.createElement('tr');
tr.setAttribute('id', `${idOfRow}`);
table.append(tr);
const tdItem = document.createElement('td');
tdItem.innerText = `Item ${idOfRow}`;
tr.append(tdItem);

const tdQuantity = document.createElement('td');
// tdQuantity.innerText = `Quantity `;
tdQuantity.innerHTML = `<input type = "text" name = qty${idOfRow} />`;
tr.append(tdQuantity);

const tdPrice = document.createElement('td');
// tdPrice.innerText = `Price `;
tdPrice.innerHTML = `<input type = "text" name = price${idOfRow} />`;
tr.append(tdPrice);

const tdTotal = document.createElement('td');
// tdTotal.innerText = `Total `;
tdTotal.innerHTML = `<input type = "text" name = total${idOfRow} />`;
tr.append(tdTotal);


function generateRow(id) {
    console.log(idOfRow)
    idOfRow++;
    const tr = document.createElement('tr');
    tr.setAttribute('id', `${idOfRow}`);
    table.append(tr);
    const tdItem = document.createElement('td');
    tdItem.innerText = `Item ${idOfRow}`;
    tr.append(tdItem);

    const tdQuantity = document.createElement('td');
    // tdQuantity.innerText = `Quantity `;
    tdQuantity.innerHTML = `<input type = "text" name = qty${idOfRow} />`;
    tr.append(tdQuantity);

    const tdPrice = document.createElement('td');
    // tdPrice.innerText = `Price `;
    tdPrice.innerHTML = `<input type = "text" name = price${idOfRow} />`;
    tr.append(tdPrice);

    const tdTotal = document.createElement('td');
    // tdTotal.innerText = `Total `;
    tdTotal.innerHTML = `<input type = "text" name = total${idOfRow} />`;
    tr.append(tdTotal);

}

function deleteRow() {
    console.log(idOfRow)

    if (idOfRow > 1) {
        document.getElementById(`${idOfRow}`).remove();
        --idOfRow;
        return false;
    } else {
        alert("Last row can't Delete")
    }

}