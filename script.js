const form = document.getElementById("chat-form");
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = input.value.trim();
  if (msg !== "") {
    addMessage("Você", msg);
    input.value = "";
    simulateReply();
  }
});

function addMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");
  msgDiv.textContent = `${sender}: ${text}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function simulateReply() {
  setTimeout(() => {
    const respostas = [
      "🌱 Que legal ver a cidade e o campo conectados!",
      "🚜 A tecnologia no campo é incrível!",
      "🏙️ As feiras da cidade ajudam muito os produtores rurais!",
      "🍓 Alimentos fresquinhos direto da roça!",
      "🌻 Viva o Agrinho!"
    ];
    const random = respostas[Math.floor(Math.random() * respostas.length)];
    addMessage("AgrinhoBot", random);
  }, 1000);
}
