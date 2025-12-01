async function sendMessage() {
  const input = document.getElementById("message");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.innerText = input.value;
  chatBox.appendChild(userMessage);

  const botReply = document.createElement("div");
  botReply.className = "message bot";
  botReply.innerText = "Bot: " + input.value;
  chatBox.appendChild(botReply);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}
