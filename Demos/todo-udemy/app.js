document.addEventListener("DOMContentLoaded", main);

function main() {
  let inputElem = document.querySelector("#inputTask");
  let btnAdd = document.querySelector("#btnAddOne");
  let btnClearAll = document.querySelector("#btnClearAll");
  let btnClearDone = document.querySelector("#btnClearDone");

  inputElem.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      let content = inputElem.value;
      if (content !== "") {
        addTask(content);
        inputElem.value = "";
      }
    }
  });

  btnAdd.addEventListener("click", (event) => {
    let content = inputElem.value;
    if (content !== "") {
      addTask(content);
      inputElem.value = "";
    }
  });

  btnClearAll.addEventListener("click", deleteAllTasks);
  btnClearDone.addEventListener("click", deleteDoneTasks);
}

function deleteDoneTasks() {
  let ulElem = document.querySelector("ul");

  let disabledElems = ulElem.querySelectorAll(".w3-disabled");
  for (let elem of disabledElems) {
    let liElem = elem.parentNode;
    liElem.remove();
  }
}

function deleteAllTasks() {
  let ulElem = document.querySelector("ul");
  let divInputElem = document.querySelector("#divInput");
  ulElem.remove();

  ulElem = document.createElement("ul");
  ulElem.classList.add("w3-ul", "w3-border");
  divInputElem.appendChild(ulElem);
}

function addTask(content) {
  // input
  let inputElem = document.createElement("input");
  inputElem.setAttribute("type", "checkbox");
  inputElem.classList.add("w3-check");
  inputElem.nextElementSibling;
  inputElem.addEventListener("change", (event) => {
    let targetElem = event.target;
    let labelElem = targetElem.nextElementSibling;
    if (targetElem.checked) {
      labelElem.classList.add("w3-disabled");
    } else {
      labelElem.classList.remove("w3-disabled");
    }
  });
  // label
  let labelElem = document.createElement("label");
  labelElem.innerText = content;
  // button
  let btnElem = document.createElement("button");
  btnElem.innerText = "-";
  btnElem.classList.add("w3-button");
  btnElem.classList.add("w3-circle");
  btnElem.classList.add("w3-red");
  btnElem.addEventListener("click", (event) => {
    let targetElem = event.target;
    let liElem = targetElem.parentNode;
    liElem.remove();
  });

  // <li> an <ul> anhängen
  let liElem = document.createElement("li");
  liElem.append(inputElem, labelElem, btnElem);
  let uiElem = document.querySelector("ul");
  uiElem.appendChild(liElem);
}
