var input = document.querySelector(".input");
var btn = document.querySelector(".btn");


btn.addEventListener("click", function () {
var inpVal = input.value;
input.value = "";

var newVal = document.createElement("p");


newVal.textContent = inpVal;

var deleteBtn = document.createElement("button");
deleteBtn.textContent = "";

var icon = document.createElement("img");
icon.src = "Images/DelIcon.png"
deleteBtn.appendChild(icon);

newVal.appendChild(deleteBtn);
deleteBtn.classList.add("delBtn");

deleteBtn.addEventListener("click", function () {
    newVal.remove();
});

var container = document.querySelector(".mid-container");
container.appendChild(newVal);
});
