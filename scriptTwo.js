const addButton = document.querySelector('#add');

const addNewNote = (text = '') => {

    const note = document.createElement('div');
    note.classList.add('note');
    
    const htmlData = `
    <div class="operation">
        <button class="edit"><i class="far fa-edit"></i></button>
        <button class="delete"><i class="far fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"} "> </div>
   <textarea class=" ${text ? "hidden" : ""}"></textarea>`;

    note.insertAdjacentHTML('afterbegin', htmlData );
    // console.log(note);
    
    // getting the refrence

    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // deleting the node
    delButton.addEventListener('click', () => {
        note.remove();
        updateLSData();
    }) 

    textArea.value = text;
    mainDiv.innerHTML = text;

    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateLSData();
    })

    document.body.appendChild(note);
}

// local stroage section

const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notess = [];
    
    textAreaData.forEach((note) => {
        return notess.push(note.value);
    })
    localStorage.setItem('notess', JSON.stringify(notess));

}

// getting data back from local stroage
const notess = JSON.parse(localStorage.getItem('notess'));

if(notess){
    notess.forEach((note) => {
        addNewNote(note);
    })
}   
addButton.addEventListener('click', () => {
    addNewNote()
})