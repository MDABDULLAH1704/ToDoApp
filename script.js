// JavaScript for input and button
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Defined AddTask() Function When Click on Button
function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Below 3 lines are Cross Icon Code
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();     // Store Task in Browser function call
}


// JavaScript for the Click Function Checked or Unchecked
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();     // Store Task in Browser function call
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();     // Store Task in Browser function call
    }
}, false);


// JavaScript to Store Task in Browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();   // Call this Function
