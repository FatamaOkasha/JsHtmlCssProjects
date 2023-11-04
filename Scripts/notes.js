const noteContainer = document.querySelector(".js-container-notes");
const buttonElement = document.querySelector(".btn");

function updateStorage() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}

buttonElement.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  inputBox.setAttribute("contenteditable", "true");
  inputBox.className = "input-box";
  let img = document.createElement("img");
  img.src = "images/delete.png";
  noteContainer.appendChild(inputBox).appendChild(img);
  updateStorage();
});

noteContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    event.target.parentElement.remove();
    updateStorage();
  }
});
