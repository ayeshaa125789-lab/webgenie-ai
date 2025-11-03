function generate() {
  const id = document.getElementById("siteId").value.trim();
  const prompt = document.getElementById("prompt").value.trim();
  if (!id || !prompt) return alert("Please enter both ID and idea!");

  // Simple template generator
  const html = `
    <h2>${prompt} Website</h2>
    <p>Welcome to your new ${prompt.toLowerCase()} website!</p>
    <p>You can edit this content — just click "Edit".</p>
    <button onclick="enableEdit('${id}')">Edit</button>
    <button onclick="saveEdit('${id}')">Save</button>
  `;

  document.getElementById("output").innerHTML = html;

  // Save to localStorage
  let sites = JSON.parse(localStorage.getItem("websites")) || {};
  sites[id] = { content: html };
  localStorage.setItem("websites", JSON.stringify(sites));

  alert("Website generated and saved!");
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
  alert("You can now edit your website content.");
}

function saveEdit(id) {
  const content = document.getElementById("output").innerHTML;
  let sites = JSON.parse(localStorage.getItem("websites")) || {};
  sites[id] = { content };
  localStorage.setItem("websites", JSON.stringify(sites));
  alert("Changes saved!");
}
