var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
   return input.value.length;
}

function createListElement() {
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);
   input.value = "";
        
         // Delete Button Syntax
          var btn = document.createElement("button");
          btn.appendChild(document.createTextNode("Delete!"));
          li.appendChild(btn);
              btn.onclick = removeParent;
}

function addListAfterClick() {
      if (inputLength() > 0) {
           createListElement();
      } 
}

function addListAfterKeypress(event) {
      if (inputLength() > 0 && event.code === "Enter") {
         createListElement();
      } 
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick=function(event){
   var target=event.target;
   target.classList.toggle("decoration");
}

// Delete Button Working Syntax
function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
}

