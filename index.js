let form = document.querySelector('form')
form.addEventListener('submit', addToDo);

function addToDo(e) {
    e.preventDefault();
    let element = document.createElement('li');
    element.addEventListener('click', completeToDo);
    let input = document.querySelector('#item').value;
    element.innerText = input;
    let button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', removeToDo);
    element.appendChild(button);
    let ul = document.querySelector('ul');
    ul.appendChild(element);
    console.dir(input);
}

function removeToDo(e) {
    e.target.parentNode.remove();
}

function completeToDo (e) {
    let checked = e.target.getAttribute('aria-checked');
    if (checked !== 'true') {
        e.target.setAttribute('aria-checked', 'true');
    }
    else e.target.setAttribute('aria-checked', 'false');
}

