// Function to add a new image to the gallery
function addImage() {
  const imageUrl = document.getElementById("image-url").value.trim();
  
  if (imageUrl === "") {
    alert("Please enter a valid image URL.");
    return;
  }

  // Create new figure element
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "User-added image";

  // Create a caption
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = "User-added Destination";

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function () {
    figure.remove();
  };

  // Append elements to figure
  figure.appendChild(img);
  figure.appendChild(figcaption);
  figure.appendChild(deleteBtn);

  // Append figure to gallery grid
  document.getElementById("gallery-grid").appendChild(figure);

  // Clear the input field
  document.getElementById("image-url").value = "";
}

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
});

// Dynamic To-Do List
function addTask() {
  let taskInput = document.getElementById("new-task");
  let task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;

  // Create delete button for each task
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("task-list").appendChild(li);

  // Clear the input
  taskInput.value = "";
}
