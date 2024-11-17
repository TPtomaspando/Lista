document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  // Obtener el valor del input
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  // Verificar que el input no esté vacío
  if (taskText === "") {
    alert("Por favor ingresa una tarea.");
    return;
  }

  // Crear un nuevo elemento de lista (li) para la tarea
  const taskItem = document.createElement("li");
  taskItem.className =
    "list-group-item d-flex justify-content-between align-items-center";
  taskItem.innerText = taskText;

  // Crear el botón de eliminar
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm";
  deleteBtn.innerText = "Eliminar";
  deleteBtn.addEventListener("click", () => {
    taskItem.remove(); // Elimina el elemento de la lista
  });

  // Agregar el botón de eliminar al elemento de la lista
  taskItem.appendChild(deleteBtn);

  // Agregar la tarea a la lista de tareas
  document.getElementById("taskList").appendChild(taskItem);

  // Limpiar el campo de input
  taskInput.value = "";
}
