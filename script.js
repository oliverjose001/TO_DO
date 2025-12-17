let input = document.getElementById("input");
let addbtn = document.getElementById("btn");
let list = document.getElementById("list");

let tasks = []; // array saves the tasks

addbtn.addEventListener("click", function () {
  let text = input.value.trim().toLowerCase();

  //verification

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  if (tasks.includes(text)) {
    alert("Task already exists");
    return;
  }


    //push the tasks in the array
  tasks.push(text);

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px";

  checkbox.addEventListener("change", function () {
    li.style.textDecoration = checkbox.checked ? "line-through" : "none";  // line through
  });

  let span = document.createElement("span"); // span hold the text user values
  span.textContent = text;
  span.style.marginRight = "10px";

  let delbtn = document.createElement("button"); //delete
  delbtn.textContent = "❌";

  delbtn.addEventListener("click", function () {
    list.removeChild(li);
    tasks = tasks.filter((task) => task !== text); 
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delbtn);

  list.appendChild(li);

  input.value = "";
  input.focus();
});
