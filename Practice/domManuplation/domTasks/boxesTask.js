const div = document.getElementById('right-div');
const length = div.children;
let divId = '';

const span = document.createElement('span');
span.setAttribute('id', 'inner-span');
span.innerText = 'No Box Inside';
div.append(span)


function addElement() {

    for (checkLenght of length) {
        if (checkLenght === span) {
            span.style.display = 'none';
        }
        const counter = document.getElementById('counterSpan');
        counter.innerText = length.length;
    }

    let divId = `div${length.length}`;

    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('class', 'inner-div');
    innerDiv.setAttribute('id', `${divId}`);
    div.append(innerDiv);


    const removeButton = document.createElement('button');
    removeButton.setAttribute('id', `removeBtn${length.length-1}`);
    removeButton.setAttribute('class', 'removeBtn')
    removeButton.setAttribute('onclick', `removeElement(this)`)
    removeButton.innerText = 'Remove';
    innerDiv.append(removeButton);


    return innerDiv;
}


function removeElement(obj) {
    obj.parentElement.remove();

    for (checkLenght of length) {
        const counter = document.getElementById('counterSpan');
        counter.innerText = length.length - 1;
        if (length.length - 1 === 0) {
            span.style.display = 'block';
        }
    }


}
