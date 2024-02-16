
function isChecked(obj) {
    // const checkbox = document.getElementById('cricket');
    const value = obj.value;
    let label = obj.nextElementSibling;
    if (obj.checked) {
        label.innerText = value;
        console.log(value);
    } else {
        label.innerText = "";
    }
}