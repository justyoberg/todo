export default function createTodo(form) {
  return {
    title: form.title,
    description: form.description,
    dueDate: form.dueDate,
    priority: form.priority,
  }
}