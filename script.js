function generate() {
  const id = document.getElementById("siteId").value.trim();
  const prompt = document.getElementById("prompt").value.trim().toLowerCase();
  if (!id || !prompt) return alert("Please enter both ID and idea!");

  let html = "";

  // 🧠 Smart AI-Like Layout Generator
  if (prompt.includes("portfolio")) {
    html = `
      <section class='text-center'>
        <h2 class='text-2xl font-bold'>My Portfolio</h2>
        <p>Hello! I’m a web developer showcasing my work.</p>
        <div class='grid grid-cols-3 gap-3 mt-4'>
          <div class='p-3 border rounded-lg'>Project 1</div>
          <div class='p-3 border rounded-lg'>Project 2</div>
          <div class='p-3 border rounded-lg'>Project 3</div>
        </div>
      </section>
    `;
  } 
  else if (prompt.includes("shop")) {
    html = `
      <section>
        <h2 class='text-2xl font-bold text-center'>Online Shop</h2>
        <div class='grid grid-cols-2 gap-4 mt-4'>
          <div class='border p-3 rounded-lg'>🛍️ Product 1</div>
          <div class='border p-3 rounded-lg'>🛍️ Product 2</div>
        </div>
      </section>
    `;
  }
  else if (prompt.includes("blog")) {
    html = `
      <section>
        <h2 class='text-2xl font-bold text-center'>My Blog</h2>
        <article class='p-3 border rounded-lg my-3'>
          <h3>Blog Post Title</h3>
          <p>Welcome to my blog! This is your first article.</p>
        </article>
      </section>
    `;
  } 
  else {
    html = `
      <section class='text-center'>
        <h2 class='text-2xl font-bold'>${prompt} Website</h2>
        <p>Welcome to your new website created by WebGenie AI!</p>
      </section>
    `;
  }

  // Add edit/save buttons
  html += `
    <div class='text-center mt-4 space-x-2'>
      <button onclick="enableEdit('${id}')" class="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
      <button onclick="saveEdit('${id}')" class="bg-green-600 text-white px-3 py-1 rounded">Save</button>
    </div>
  `;

  document.getElementById("output").innerHTML = html;

  // Save website to localStorage
  let sites = JSON.parse(localStorage.getItem("websites")) || {};
  sites[id] = { content: html };
  localStorage.setItem("websites", JSON.stringify(sites));

  alert("✅ Website generated & saved!");
  loadDashboard();
}

function openSaved() {
  const id = document.getElementById("siteId").value.trim();
  if (!id) return alert("Enter site ID to open!");

  let sites = JSON.parse(localStorage.getItem("websites")) || {};
  if (!sites[id]) return alert("No saved website found for this ID!");

  document.getElementById("output").innerHTML = sites[id].content;
}

function enableEdit(id) {
  const output = document.getElementById("output");
  output.contentEditable = true;
  alert("📝 Edit mode enabled. Make your changes and click 'Save' when done!");
}

function saveEdit(id) {
  const content = document.getElementById("output").innerHTML;
  let sites = JSON.parse(localStorage.getItem("websites")) || {};
  sites[id] = { content };
  localStorage.setItem("websites", JSON.stringify(sites));
  alert("💾 Changes saved!");
  loadDashboard();
}

function loadDashboard() {
  const listDiv = document.getElementById("siteList");
  listDiv.innerHTML = "";
  let sites = JSON.parse(localStorage.getItem("websites")) || {};

  if (Object.keys(sites).length === 0) {
    listDiv.innerHTML = "<p class='text-gray-500'>No saved sites yet.</p>";
    return;
  }

  Object.keys(sites).forEach(id => {
    const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-white shadow p-2 rounded-lg";
    div.innerHTML = `
      <span class='font-medium text-indigo-600'>${id}</span>
      <div class='space-x-2'>
        <button onclick="openSite('${id}')" class="bg-blue-500 text-white px-2 py-1 rounded">Open</button>
        <button onclick="deleteSite('${id}')" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
      </div>
    `;
    listDiv.appendChild(div);
  });
}

function openSite(id) {
  let sites = JSON.parse(localStorage.getItem("websites")) || {};
  document.getElementById("siteId").value = id;
  document.getElementById("output").innerHTML = sites[id].content;
}

function deleteSite(id) {
  let sites = JSON.parse(localStorage.getItem("websites")) || {};
  delete sites[id];
  localStorage.setItem("websites", JSON.stringify(sites));
  alert("🗑️ Website deleted successfully!");
  loadDashboard();
}

// Load dashboard on start
window.onload = loadDashboard;
