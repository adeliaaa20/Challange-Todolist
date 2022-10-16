const form = document.querySelector("form");
const inputUser = document.getElementById("input-user");
const ListGroup = document.querySelector(".list-group");
form.addEventListener("submit", function(event) {

  ListGroup.innerHTML += `
   <li class="list-group-item d-flex justify-content-between align-items-center">
     <h3>${inputUser.value}</h3><span class="fs-4"><i class="bi bi-x-octagon text-danger" id="delete-btn"></i></span>
   </li>
  `

  inputUser.value = "";

  event.preventDefault();
});

ListGroup.addEventListener("click", function (event) {
    if (event.target.id == "delete-btn") {
      event.target.parentElement.parentElement.remove();
    }

});