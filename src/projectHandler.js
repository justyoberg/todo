import { de } from "date-fns/locale";
import { setupOnclickEvents } from "./eventListeners";

export default class ProjectHandler {
  
  static projectCount = 0;
  static projects = [];
  static projectList = document.querySelector(".project-list");
  static todoContainer = document.querySelector(".todo");
  static projectName = document.querySelector(".project-name");
  static activeProject = "";

  static createProject = () => {
    // Create a new default project

    // Cap the project amount at 11
    if (this.projects.length >= 11) {return};
    this.projectList.innerHTML = ``;

    // Create the new project div
    let projDiv = document.createElement("div");
    projDiv.classList.add("project-item");
    this.projectCount += 1;

    projDiv.setAttribute("id", `${this.projectCount}`)
    projDiv.innerHTML = `
        <button class="project-select-btn" id="${projDiv.id}">Project ${projDiv.id}</button>
    `
    // Create an object with the div and an array for the todo list
    let projectObj = {
      name: `Project ${projDiv.id}`,
      div: projDiv,
      lists: [
        { 
          title: `Project ${projDiv.id} task`,
          dueDate: `2022-01-01`,
          priority: "low",
        }
      ],
    }

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-project");
    deleteButton.setAttribute("id", `${projDiv.id}`);
    deleteButton.textContent = "x";
    deleteButton.style.marginLeft = "16px";
    projDiv.appendChild(deleteButton);

    // Put object in the project array and update the DOM
    this.projects.push(projectObj);
    this.updateProjectList();

    setupOnclickEvents();
  }

  static deleteProject = (event) => {
    // Delete a project from the projects array

    this.projectList.innerHTML = ``;
    // Reset the projects list if the final element is being deleted
    if (this.projects.length == 1) {
      this.projects = [];
      this.projectList.innerHTML = `<div class="project-empty">You have no projects.</div>`;
      return
    };

    // Filter the projects by the id of the even button and update the DOM
    this.projects = this.projects.filter((o) => o.div.id !== event.target.id);
    this.updateProjectList();

    // Reset the todo list container's HTML if its the active project
    if (event.target.id == this.activeProject){
      this.projectName.innerHTML = `<h1>Select a project</h1>`;
      this.todoContainer.innerHTML = ``;
    }

    setupOnclickEvents();
  }

  static updateProjectList = () => {
    // Updates the DOM
    this.projects.forEach((project) => this.projectList.appendChild(project.div));
  }

  static updateTodoList = (project) => {
    // Creates each todo item and appends them to the DOM
    this.todoContainer.innerHTML = '';
    for (let listItem of project.lists) {
      let menuButton = document.createElement("button");
      menuButton.classList.add("edit-todo");
      menuButton.setAttribute("id", project.lists.indexOf(listItem));
      menuButton.textContent = "☰";
      menuButton.onclick = () => this.openTodoMenu(project, project.lists.indexOf(listItem));

      let deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-todo");
      deleteButton.setAttribute("id", project.lists.indexOf(listItem));
      deleteButton.textContent = "X";
      deleteButton.ondblclick = () => this.deleteTodo(project, project.lists.indexOf(listItem));
      deleteButton.style.marginLeft = "16px";

      let buttonContainer = document.createElement("div");

      let listItemDiv = document.createElement("div");
      listItemDiv.classList.add("list-item");
      listItemDiv.classList.add(listItem.priority);
      listItemDiv.innerHTML = `
        <h3 class="title">${listItem.title.slice(0, 30)}</h3>
        <p class="due">Due date: ${listItem.dueDate}</p>
      `
      buttonContainer.appendChild(menuButton);
      buttonContainer.appendChild(deleteButton);
      listItemDiv.appendChild(buttonContainer);
      this.todoContainer.appendChild(listItemDiv);
    };

    let addButton = this.createTodoAddButton(project);
    this.todoContainer.appendChild(addButton);
  }

  static showTodoList = (event) => {

    // Disable the active project button
    const projectSelectBtns = document.querySelectorAll(".project-select-btn");
    projectSelectBtns.forEach((btn) => {
      if (event.target === btn) {btn.disabled = true}
      else {btn.disabled = false};
    })

    // Search the projects array for the selected project's object
    let project = this.projects.find((proj) => proj.div.id === event.target.id);
    this.activeProject = project.div.id;

    this.projectName.innerHTML = `<h1>${project.name}</h1>`;

    // Append all the list items of the project to the DOM
    this.updateTodoList(project);

    setupOnclickEvents();
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
      title: `Project ${project.div.id} task`,
      dueDate: `2022-01-01`,
      priority: "low",
    };

    project.lists.push(defaultTodo);
    this.updateTodoList(project);
  }

  static openTodoMenu = (project, listIndex) => {
    // Opens the modal for editing a Todo item
    const modalWrapper = document.querySelector(".modal-wrapper");
    const modal = document.querySelector(".modal");

    let closeModal = document.createElement("button");
    closeModal.textContent = "Close";
    closeModal.classList.add("close-modal");
    closeModal.onclick = () => modalWrapper.style.display = "none";

    let submit = document.createElement("button");
    submit.classList.add("submit-todo-edit");
    submit.setAttribute("form", `${project.name} ${listIndex}`);
    submit.textContent = "Submit";
    submit.type = "button";

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
    let buttonDiv = document.createElement("div");
    buttonDiv.appendChild(submit);
    buttonDiv.appendChild(closeModal);
    modal.appendChild(buttonDiv);
    modalWrapper.style.display = "flex";

    const getFormData = () => {

      const form = document.getElementById(`${project.name} ${listIndex}`);
      let formObject = new FormData(form);
      let data = Object.fromEntries(formObject);
      if(Object.values(data).some((a) => a === "")) return;

      project.name = data.project;
      project.lists[listIndex] = data;
      // Update the dom
      this.updateProjectNames(project);
      modalWrapper.style.display = "none";
      this.updateTodoList(project);

    }

    submit.onclick = getFormData;
  }


  static deleteTodo = (project, listIndex) => {

    project.lists.splice(listIndex, 1);
    this.updateTodoList(project);

  }

  static updateProjectNames = (project) => {
    // Updates the DOM with correct project names
    let projectName = document.querySelector(".project-name");
      projectName.innerHTML = `<h1>${project.name}</h1>`;
      let projectListItem = document.querySelectorAll(".project-select-btn");
      projectListItem.forEach((proj) => {
        if (proj.id === project.div.id) proj.textContent = project.name.slice(0, 20);
      })
      projectListItem.textContent = project.name;
  }
};  
