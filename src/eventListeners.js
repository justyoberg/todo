import ProjectHandler from "./projectHandler.js";

export function setupEventListeners(){
  // Create project button
  const createProjectBtn = document.querySelector(".create-project");
  createProjectBtn.addEventListener("click", ProjectHandler.createProject);

  // Delete project buttons
  const deleteProjectBtns = document.querySelectorAll(".delete-project");
  deleteProjectBtns.forEach((btn) => btn.ondblclick = ProjectHandler.deleteProject);
}