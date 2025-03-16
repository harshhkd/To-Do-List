const intputBox = document.getElementById("input-box");
const listontainer = document.getElementById("list-container");

function addTask() {
  if (intputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = intputBox.value;
    listontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // to add cross button in list
    li.appendChild(span);
  }
  intputBox.value = "";
  saveData();
}

listontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listontainer.innerHTML);
}
function showList() {
  listontainer.innerHTML = localStorage.getItem("data");
}
showList();
