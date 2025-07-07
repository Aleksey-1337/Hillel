const API_URL = "http://localhost:5000/api/todos";

async function fetchTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = async () => {
      await fetch(`${API_URL}/${todo._id}`, { method: "DELETE" });
      fetchTodos();
    };
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

document.getElementById("todo-form").addEventListener("submit", async e => {
  e.preventDefault();
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text) {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    input.value = "";
    fetchTodos();
  }
});

fetchTodos();
