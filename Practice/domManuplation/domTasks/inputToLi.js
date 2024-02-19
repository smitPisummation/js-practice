const div = document.getElementById('lower-div');
const span = document.getElementById('span');
let valueInput = document.getElementById('textInput');
const ul = document.createElement('ul');

function addText() {
    div.append(ul);


    if (valueInput.value === "") {
        alert("Plese Enter Value");
        return false;
    } else {
        span.remove();
        let li = document.createElement('li');
        li.innerText = valueInput.value;
        ul.append(li);

        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('onclick', 'removeValue(this)');
        removeBtn.innerText = 'Remove'
        li.append(removeBtn);
    }

    document.getElementById('textInput').value = "";

}

function removeValue(obj) {
    obj.parentElement.remove();
    if (ul.children.length === 0) {
        div.append(span);
    }
}