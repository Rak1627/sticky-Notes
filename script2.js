const add = document.querySelector('#add');

const addNewNote = (text = "") => {
    let note = document.createElement('div');
    note.classList.add('note');
    let htmlData = `
    <div class="operation">
        <button class="edit"><i class="far fa-edit"></i></button>
        <button class="delete"><i class="far fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"> </div>
    <textarea class="${text ? "hidden" : ""}"></textarea>  `;

    note.insertAdjacentHTML("afterbegin", htmlData);
    console.log(note);

    document.body.appendChild(note);


    // getting the refrence data

    let editButton = note.querySelector('.edit');
    let delButton = note.querySelector('.delete');
    let mainDiv = note.querySelector('.main');
    let textArea = note.querySelector('textarea');

    delButton.addEventListener('click', () => {
        note.remove();
    })

    mainDiv.innerHTML = text;
    textArea.value = text;

    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('change', (event) => {
        let value = event.target.value;
        mainDiv.innerHTML = value;
    })


};



add.addEventListener('click', () => {
    addNewNote();
})