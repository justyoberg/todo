import { setupOnclickEvents } from "./eventListeners";

export default class ProjectHandler {
  
  
  static projects = JSON.parse(localStorage.getItem("projects") || "[]");
  static projectCount = JSON.parse(localStorage.getItem("projectCount") || 0);
  static projectList = document.querySelector(".project-list");
  static todoContainer = document.querySelector(".todo");
  static projectName = document.querySelector(".project-name");
  static activeProject = "";

  static createProjectObject = () => {
    // Increase the project count
    this.projectCount += 1;
    // Return a default project object
    return {
      name: `Project ${this.projectCount}`,
      id: `${this.projectCount}`,
      lists: [
        { 
          title: `Project ${this.projectCount} task`,
          dueDate: `2022-01-01`,
          priority: "low",
        }
      ],
    }
  }

  static createProject = () => {
    // Create a new default project

    // Prevent creating more than 11 projects
    if (this.projects.length >= 11) {return};
    this.projectList.innerHTML = ``;

    // Create project object
    let projectObj = this.createProjectObject();

    // Push project into projects
    this.projects.push(projectObj);

    // Create the new project div and append it to the DOM
    this.updateProjectList();
  }

  static updateProjectList = () => {
    // Update the DOM with the correct projects
    this.projectList.innerHTML = ``;
    // Update Local Storage
    localStorage.setItem("projects", JSON.stringify(this.projects));
    localStorage.setItem("projectCount", JSON.stringify(this.projectCount));

    if (this.projects.length <= 0) {
      return this.projectList.innerHTML = `
      <div class="project-empty">
        You have no projects.
      </div>
      `;
    };

    for (let proj of this.projects) {
      let projDiv = document.createElement("div");
      projDiv.classList.add("project-item");
      projDiv.setAttribute("id", `${proj.id}`)

      // Create the project select button
      let selectButton = document.createElement("button");
      selectButton.classList.add("project-select-btn");
      selectButton.setAttribute("id", `${proj.id}`);
      selectButton.textContent = `${proj.name}`;
      if (this.activeProject == proj.id) selectButton.disabled = "true";

      // Create the delete button to append to the Project div
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-project");
      deleteButton.setAttribute("id", `${proj.id}`);
      deleteButton.textContent = "x";
      deleteButton.style.marginLeft = "16px";

      projDiv.appendChild(selectButton);
      projDiv.appendChild(deleteButton);

      this.projectList.append(projDiv);
    }
    // Setup the click events for the buttons
    setupOnclickEvents();
  }

  static deleteProject = (event) => {
    // Delete a project from the projects array

    // If the current active project is being deleted, update the header
    // and erase the task list
    if (event.target.id == this.activeProject) {
      this.projectName.innerHTML = `
      <h1>
        Select a project
      </h1>
      `
      this.todoContainer.innerHTML = '';
    }

    // Reset the projects list if the final element is being deleted
    if (this.projects.length == 1) {
      this.projects = [];
      this.projectList.innerHTML = `
      <div class="project-empty">
        You have no projects.
      </div>
      `;
    };

    // Filter the projects array of the item
    this.projects = this.projects.filter(proj => proj.id != event.target.id);

    this.updateProjectList();
  }

  static updateTodoList = (project) => {
    // Creates each todo item and appends them to the DOM

    this.todoContainer.innerHTML = '';

    // Loop through the project's list of tasks and append them to the DOM
    for (let listItem of project.lists) {
      // Hamburger menu button
      let menuButton = document.createElement("button");
      menuButton.classList.add("edit-todo");
      menuButton.setAttribute("id", project.lists.indexOf(listItem));
      menuButton.textContent = "Edit";
      menuButton.onclick = () => this.openTodoMenu(project, project.lists.indexOf(listItem));
      // Delete task button
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-todo");
      deleteButton.setAttribute("id", project.lists.indexOf(listItem));
      deleteButton.textContent = "Delete";
      deleteButton.ondblclick = () => this.deleteTodo(project, project.lists.indexOf(listItem));
      deleteButton.style.marginLeft = "16px";
      // Create a container for the buttons
      let buttonContainer = document.createElement("div");
      buttonContainer.appendChild(menuButton);
      buttonContainer.appendChild(deleteButton);
      // Create a div for each item and append to the dom
      let listItemDiv = document.createElement("div");
      listItemDiv.classList.add("list-item");
      listItemDiv.classList.add(listItem.priority);
      listItemDiv.innerHTML = `
        <h3 class="title">${listItem.title.slice(0, 30)}</h3>
        <p class="due">Due date: ${listItem.dueDate}</p>
      `
      listItemDiv.appendChild(buttonContainer);
      this.todoContainer.appendChild(listItemDiv);
    };

    // Create the "Add new" button under the task list
    let addButton = this.createTodoAddButton(project);
    this.todoContainer.appendChild(addButton);

  }

  static createTodoAddButton = (project) => {
    // Create a button to add more todo items
    
    const addTodo = document.createElement("button");
    addTodo.textContent = "Add new";
    addTodo.classList.add("add-todo");
    addTodo.onclick = () => this.addNewTodo(project);
    return addTodo;
    
  }

  static addNewTodo = (project) => {
    // Create a new Todo task
    let defaultTodo = { 
      title: `Project ${project.id} task`,
      dueDate: `2022-01-01`,
      priority: "low",
    };

    // Push the task into the project object and update the DOM
    project.lists.push(defaultTodo);
    this.updateTodoList(project);
  }

  static showTodoList = (event) => {
    // Populate the todo container with tasks
    this.activeProject = event.target.id;
    // Disable the active project button
    const projectSelectBtns = document.querySelectorAll(".project-select-btn");
    projectSelectBtns.forEach((btn) => {
      if (btn.id === this.activeProject) {btn.disabled = true}
      else {btn.disabled = false};
    })

    // Search the projects array for the selected project's object
    let project = this.projects.find((proj) => proj.id == event.target.id);

    // Change the Project name header of the todo list
    this.projectName.innerHTML = `<h1>${project.name}</h1>`;

    // Append all the list items of the project to the DOM
    this.updateTodoList(project);

  }

  static openTodoMenu = (project, listIndex) => {
    // Opens the modal for editing a Todo item

    const modalWrapper = document.querySelector(".modal-wrapper");
    const modal = document.querySelector(".modal");
    // Create the close button
    let closeModal = document.createElement("button");
    closeModal.textContent = "Close";
    closeModal.classList.add("close-modal");
    closeModal.onclick = () => modalWrapper.style.display = "none";
    // Create the submit button
    let submit = document.createElement("button");
    submit.classList.add("submit-todo-edit");
    submit.setAttribute("form", `${project.name} ${listIndex}`);
    submit.textContent = "Submit";
    submit.type = "button";
    // Create the modal markup
    modal.innerHTML = `
    <form id="${project.name} ${listIndex}">
      <div>
        <input type="text"
        name="project"
        id="project"
        minlength="1"
        value="${project.name}"
        required>
      </div>
      <div>
        <label for="title">Task: </label>
        <input type="text" 
               name="title" 
               id="title"
               minlength="1"
               value="${project.lists[listIndex].title}"
               required>
      </div>  
      <div>
        <label for="date">Due: </label>
        <input type="date" 
               name="dueDate" 
               id="date" 
               value="${project.lists[listIndex].dueDate}"
               required>
      </div>
      <div>
        <p>Priority: </p>
        <br>
        <label for="prio1">High</label>
        <input type="radio" name="priority" id="prio1" value="high">
        <label for="prio2">Medium</label>
        <input type="radio" name="priority" id="prio2" value="medium">
        <label for="prio3">Low</label>
        <input type="radio" name="priority" id="prio3" value="low" checked>
      </div>
    </form>
    `
    // Create a div to append the buttons
    let buttonDiv = document.createElement("div");
    buttonDiv.appendChild(submit);
    buttonDiv.appendChild(closeModal);
    modal.appendChild(buttonDiv);
    modalWrapper.style.display = "flex";

    const getFormData = () => {
      // Grab the data from the form
      const form = document.getElementById(`${project.name} ${listIndex}`);
      let formObject = new FormData(form);
      // Store the form data
      let data = Object.fromEntries(formObject);
      // If some of the form data is empty, prevent submission
      if(Object.values(data).some((a) => a === "")) return;

      this.projects.find(proj => proj.name == project.name).name = data.project;

      project.lists[listIndex] = data;
      // Update the DOM with proper project names
      this.updateProjectNames(project);
      // Hide the modal
      modalWrapper.style.display = "none";
      this.updateProjectList();
      this.updateTodoList(project);

    }

    submit.onclick = getFormData;
  }


  static deleteTodo = (project, listIndex) => {
    // Delete a todo item
    project.lists.splice(listIndex, 1);
    this.updateTodoList(project);

  }

  static updateProjectNames = (project) => {

    // Updates the DOM with correct project names after they've been edited
    let projectName = document.querySelector(".project-name");
    projectName.innerHTML = `<h1>${project.name}</h1>`;
    let projectListItem = document.querySelectorAll(".project-select-btn");

    projectListItem.forEach((proj) => {
    if (proj.id === project.id) proj.textContent = project.name.slice(0, 20);
    });
    projectListItem.textContent = project.name;
  }
};  
