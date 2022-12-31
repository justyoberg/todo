import ProjectHandler from "./projectHandler.js";

export function setupOnclickEvents(){

  // Create project button
  const createProjectBtn = document.querySelector(".create-project");
  createProjectBtn.onclick = ProjectHandler.createProject;

  // Delete project buttons
  const deleteProjectBtns = document.querySelectorAll(".delete-project");
  deleteProjectBtns.forEach((btn) => btn.ondblclick = ProjectHandler.deleteProject);

  // Show the selected project's list of todos in the dom
  const projectSelectBtns = document.querySelectorAll(".project-select-btn");
  projectSelectBtns.forEach((btn) => btn.onclick = ProjectHandler.showTodoList);

}