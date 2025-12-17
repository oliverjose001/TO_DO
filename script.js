let input = document.getElementById("input");
let addbtn = document.getElementById("btn");
let list = document.getElementById("list");

let tasks = [];

addbtn.addEventListener("click", function () {
  let text = input.value.trim().toLowerCase();

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  if (tasks.includes(text)) {
    alert("Task already exists");
    return;
  }

  tasks.push(text);

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px";

  checkbox.addEventListener("change", function () {
    li.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  let span = document.createElement("span");
  span.textContent = text;
  span.style.marginRight = "10px";

  let delbtn = document.createElement("button");
  delbtn.textContent = "❌";

  delbtn.addEventListener("click", function () {
    list.removeChild(li);
    tasks = tasks.filter((task) => task !== text); // 🔥 FIX
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delbtn);

  list.appendChild(li);

  input.value = "";
  input.focus();
});
