//Link Enter with ADD Button
document.getElementById("ToDoListForm").addEventListener("submit", function(event){
  event.preventDefault();
   ToDoListAdd();
});
let listCounter = 0;
let buttonCounter = 100000;
let removeButtonCounter = 10000000000;
//Below is a function to add ToDo List elements in ul
function ToDoListAdd(event) { //start

  let InputItem = document.getElementById("ToDoInput").value;
  if (InputItem !== "") {
    listCounter++;
    buttonCounter++;
    removeButtonCounter++;
    let InputText = document.createTextNode(InputItem);
    let addElement = document.createElement("li");
    addElement.setAttribute("id",`${listCounter}`);
    addElement.appendChild(InputText);
    document.getElementById("List").appendChild(addElement);
    //add UPDATE Button
    let addUpdateButtonElement = document.createElement("button");
    addUpdateButtonElement.setAttribute("id",`${buttonCounter}`);
    addUpdateButtonElement.setAttribute("onclick",`updateItem(${addElement.id})`);
    document.getElementById("List").appendChild(addUpdateButtonElement);
    document.getElementById(`${buttonCounter}`).innerHTML = "Update";
    //add REMOVE Button
    let addRemoveButtonElement = document.createElement("button");
    addRemoveButtonElement.setAttribute("id",`${removeButtonCounter}`);
    addRemoveButtonElement.setAttribute("onclick",`removeItem(${addElement.id},${removeButtonCounter},${buttonCounter})`);
    document.getElementById("List").appendChild(addRemoveButtonElement);
    document.getElementById(`${removeButtonCounter}`).innerHTML = "Remove";
  }
  else {
    alert("No List Item to be added");
  }
  /*let addButtonElement = document.createElement("button");
  document.getElementById("List").appendChild(addButtonElement);*/
 //below is to reset value in input field
  document.getElementById("ToDoInput").value = "";
}//end

function ToDeleteEntireList() {
  document.getElementById("List").innerHTML = "";

}
//Below Func. is to update list item via prompt
function updateItem(param) {
let updatedItem = prompt("Please enter the updated ToDo list item");
document.getElementById(`${param}`).innerHTML = updatedItem;
}
///Below Func. is to remove a particular list item
function removeItem(listItem,removeId,updateId) {
//alert(listItem+updateId+removeId);
document.getElementById(listItem).remove();
document.getElementById(removeId).remove();
document.getElementById(updateId).remove();
}
