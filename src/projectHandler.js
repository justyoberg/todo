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
        <button class="delete-project" id="${projDiv.id}">x</button>
    `

    // Create an object with the div and an array for the todo list
    let projectObj = {
      name: `Project ${projDiv.id}`,
      div: projDiv,
      lists: [
        { 
          title: `Project ${projDiv.id} default title`,
          description: `Project ${projDiv.id} default description`,
          dueDate: "None",
          notes: `Project ${projDiv.id} default notes`
        }
      ],
    }

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
    this.todoContainer.innerHTML = '';
    // Append all the list items of the project to the DOM
    for (let listItem of project.lists) {
      let listItemDiv = document.createElement("div");
      listItemDiv.classList.add("list-item");
      listItemDiv.innerHTML = `
        <h3 class="title">${listItem.title}</h3>
        <p class="desc">${listItem.description}</p>
        <p class="notes">Notes:</br>${listItem.notes}</p>
        <p class="due">Due date:</br>${listItem.dueDate}</p>
      `
      this.todoContainer.appendChild(listItemDiv);
    };

    setupOnclickEvents();
  }

};  
