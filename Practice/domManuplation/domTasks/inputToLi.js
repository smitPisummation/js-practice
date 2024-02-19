const div = document.getElementById('lower-div');
const span = document.getElementById('span');

function addText() {
    const ul = document.createElement('ul');
    div.append(ul);

    let valueInput = document.getElementById('textInput');

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
    div.append(span);
}