// Basic Generate Function
function generate() {
  const prompt = document.getElementById("prompt").value.trim();
  const output = document.getElementById("output");

  if (!prompt) {
    output.innerHTML = "<p style='color:red;'>⚠️ Please enter a website idea first!</p>";
    return;
  }

  // Simulated AI Website Idea (later will connect with Supabase)
  output.innerHTML = `
    <h2>✨ Generated Website Idea:</h2>
    <p><b>${prompt}</b></p>
    <p>💡 Tip: You can connect Supabase next to make this dynamic!</p>
  `;

  console.log("✅ Generate button working!");
}
