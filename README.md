# ToDoListJavascript

**Script.js file**

// Get the input element and the button

```javascript
var input = document.querySelector(".input");
var btn = document.querySelector(".btn");
```

// Add click event listener to the button

```javascript
btn.addEventListener("click", function() {
  // Get the value from the input element
  var task = input.value;
```

// Clear the input

```javascript
input.value = "";
```

// Create a new task element (p)

```javascript
var newTask = document.createElement("p");
newTask.textContent = task;
```

// Create a delete button (button)

```javascript
var deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
```

// Added and appended icon to the button
```javascript
var icon = document.createElement("img");
icon.src = "Images/DelIcon.png"
deleteBtn.appendChild(icon);
```

// Append the delete button as a subelement of the task element and adding css delBtn class

```javascript
newVal.appendChild(deleteBtn);
deleteBtn.classList.add("delBtn");
```

// Add event listener to the delete button

```javascript
deleteBtn.addEventListener("click", function() {
  // Remove the task element when delete button is clicked
  newTask.remove();
```

});

// Append the task element to the container

```javascript
var container = document.querySelector(".mid-container");
container.appendChild(newTask);
```

});

**Index.html file**

// h2 title strip
<h2>Javascript To Do List</h2>
// box-container, top-container, and finally textbox and button added in mid container

```htm
<div class="box-container">
  <div class="box">
    <div class="top-container">
      <input
        type="text"
        placeholder="Enter your task here"
        name="input"
        class="input"
      />
      <button class="btn">Add</button>
    </div>
    <div class="mid-container" id="taskContainer"></div>
  </div>
</div>
```
