const editCardBtn = document.getElementById("edit");
const addNote_btn_modal = document.getElementById("addNote");
const title = document.getElementById("input");
const description = document.getElementById("description");
addNote_btn_modal.addEventListener("click", () => {
  cardMaker();
});

let cardData = [];
function cardMaker() {
  if(title.value===""){
    alert('add valid title');
  }
  else{
  let random = Math.floor(Math.random()*89541)
  let createCard = document.createElement("div");
  createCard.id = random;
  let titleAndDescription = {};
  titleAndDescription.title = title.value;
  titleAndDescription.description = description.value;
  titleAndDescription.id = random;
  cardData.push(titleAndDescription);
  localStorage.setItem('cardData', JSON.stringify(cardData));
  createCard.innerHTML = `
  <div
        class="card m-4 bg-light p-1 d-flex flex-column justify-content-between"
        style="width: 18rem; height: 15rem" id=${random}
      >
        <div class="card-title bg-light">${title.value}</div>
        <div class="card-body bg-light">
          <p class="bg-light">${description.value}</p>
        </div>
        <div class="card-footer d-flex">
          <span class="bg-light">September 19 2023</span>
          <span class="d-flex bg-light">
            <button class="btn bg-dark btn-secondary me-2" id="edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" 
            onClick="updateData(${random})">Edit</button>
            <button class="btn bg-danger btn-secondary" id="delete" onClick="deleteNote(${random})">Delete</button>
          </span>
        </div>
        
        <!-- Button trigger modal --><!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header bg-light">
    <h1 class="modal-title fs-5 bg-light" id="exampleModalLabel">
      Add title
    </h1>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <div class="modal-body bg-light">
    <form action="#" class="bg-light d-flex flex-column">
      <label for="title" class="bg-light m-2">Add Title</label>
      <input type="text" id="editinput" class="bg-light form-control" />
      <label for="description" class="bg-light m-2"
        >Add Description</label
      >
      <textarea
        name="textarea"
        id="description"
        cols="30"
        rows="8"
        class="bg-light"
      ></textarea> 
    </form>
  </div>
  <div class="modal-footer">
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-dismiss="modal"
    >
      Close
    </button>
    <button
      id="saveChanges"
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-dismiss="modal"
    >
      save changes
    </button>
  </div>
</div>
</div>
</div>


</div>
     

  </div>
  `;

    

  document.getElementById("wrapper").appendChild(createCard);
  title.value="";
  description.value="";
  }
  
}

function deleteNote(random) {
let flag = confirm("are you sure?")
if(flag){
  document.getElementById(random).remove();
  // const filteredObjects = localStorage.filter(obj => obj.id === random);
 let array = JSON.parse(localStorage.getItem('cardData'));
 let index = array.findIndex(obj => obj.id === random);
 array.splice(index,1);
 localStorage.setItem('cardData', JSON.stringify(array));
}
  
}
function updateData(random){
  // let title = document.getElementById('editinput').value;
  let array = JSON.parse(localStorage.getItem('cardData'));
 let index = array.findIndex(obj => obj.id === random);
// console.log(array[index].title)
  

  document.getElementById('saveChanges').addEventListener('click',()=>{
    let title = JSON.parse(localStorage.getItem('cardData'))   
    let cards = document.createElement('div');
    cards.innerHTML=`<div
    class="card m-4 bg-light p-1 d-flex flex-column justify-content-between"
    style="width: 18rem; height: 15rem" id=${random}
  >
    <div class="card-title bg-light">${document.getElementById('editinput').value}</div>
    <div class="card-body bg-light">
      <p class="bg-light">${description.value}</p>
    </div>
    <div class="card-footer d-flex">
      <span class="bg-light">September 19 2023</span>
      <span class="d-flex bg-light">
        <button class="btn bg-dark btn-secondary me-2" id="edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" 
        onClick="updateData(input)">Edit</button>
        <button class="btn bg-danger btn-secondary" id="delete" >Delete</button>
      </span>
    </div>
    `
    let idf = `${random}`;
    
     document.getElementById('wrapper').appendChild(cards)
    console.log(document.getElementById('editinput').value)
    document.getElementById(idf).remove()
  }
    
    )
   
 
}
