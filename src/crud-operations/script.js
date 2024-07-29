// CRUD Operations---------------------------------------------
// C==> Create
// R==> Read / View
// U==> Update
// D==> Delete

// Document Object Model (DOM)

document.addEventListener("DOMContentLoaded", () => {
  // Step 1, we get all required fields from html document...
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const editModal = document.getElementById("editModal");
  const deleteModal = document.getElementById("deleteModal");
  const closeEditModal = document.querySelector(".close");
  const closeDeleteModal = document.querySelector(".close-delete");

  const editTaskInput = document.getElementById("editTaskInput");
  const updateTaskButton = document.getElementById("updateTaskButton");
  const confirmDeleteButton = document.getElementById("confirmDeleteButton");
  const cancelDeleteButton = document.getElementById("cancelDeleteButton");

  // Step 2, we initialize our tasks as empty array
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let currentEditIndex = null;
  let currentDeleteIndex = null;

  // Step 3, we save our tasks in the tasks array
  const saveTasks = () => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.log(`Error saving tasks to localStorage:`, error);
    }
  };

  // Step 4, we render tasks to the taskList
  const renderTasks = () => {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
          <span>${index + 1}. ${task}</span>
          <div>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
          </div>
    `;
      taskList.appendChild(li);
    });
  };

  // Step 5, we handle form submission event
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = taskInput.value.trim();
    // console.log(newTask);

    if (newTask) {
      tasks.push(newTask);
      taskInput.value = "";
      saveTasks();
      renderTasks();
    }
  });

  renderTasks();

  // edit-btn trigger. This will trigger the model to show when a user clicks the edit btn...
  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      currentEditIndex = e.target.getAttribute("data-index");
      editTaskInput.value = tasks[currentEditIndex];
      editModal.style.display = "flex";
    } else if (e.target.classList.contains("delete-btn")) {
      currentDeleteIndex = e.target.getAttribute("data-index");
      deleteModal.style.display = "flex";
    }
  });

  // working on the button to be able to update when a user clicks on it.
  updateTaskButton.addEventListener("click", () => {
    try {
      if (currentEditIndex !== null && editTaskInput.value.trim()) {
        tasks[currentEditIndex] = editTaskInput.value.trim();
        saveTasks();
        renderTasks();
        editModal.style.display = "none";
        currentEditIndex = null;
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  });

  closeEditModal.addEventListener("click", () => {
    editModal.style.display = "none";
  });

  confirmDeleteButton.addEventListener("click", () => {
    try {
      if (currentDeleteIndex !== null) {
        tasks.splice(currentDeleteIndex, 1);
        saveTasks();
        renderTasks();
        deleteModal.style.display = "none";
      }
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  });

  cancelDeleteButton.addEventListener("click", () => {
    deleteModal.style.display = "none";
  });

  closeDeleteModal.addEventListener("click", () => {
    deleteModal.style.display = "none";
  });
});
