function generate() {
  const prompt = document.getElementById("prompt").value;
  document.getElementById("output").innerHTML = `Website idea: <b>${prompt}</b>`;
}
