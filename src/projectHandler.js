import { setupEventListeners } from "./eventListeners";

export default class ProjectHandler {
  
  static projectCount = 0;
  static projects = [];
  static projectList = document.querySelector(".project-list");

  static createProject = () => {

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

    this.projects.push(projDiv);
    this.updateProjectList();
    setupEventListeners();
  }

  static deleteProject = (event) => {

    this.projectList.innerHTML = ``;
    // Reset the projects list if the final element is being deleted
    if (this.projects.length == 1) {
      this.projects = [];
      this.projectList.innerHTML = `<div class="project-item">You have no projects.</div>`;
      return
    };

    // Filter the projects by the id of the Div to remove the correct element
    this.projects = this.projects.filter((div) => div.id !== event.target.id);
    this.updateProjectList();

    setupEventListeners();
  }

  static updateProjectList = () => {
    // Update the dom
    this.projects.forEach((project) => this.projectList.appendChild(project));
  }

};  
