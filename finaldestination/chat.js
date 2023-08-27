const chatHeader = document.getElementById("chatHeader");
const chatMessages = document.getElementById("chatMessages");
const communityItems = document.querySelectorAll(".community-item");

communityItems.forEach(item => {
  item.addEventListener("click", () => {
    const selectedCommunity = item.getAttribute("data-community");
    switchChat(selectedCommunity);
  });
});

function switchChat(community) {
  chatHeader.textContent = `Chat with ${community}`;
  // Clear chat messages
  chatMessages.innerHTML = "";
}

const messageInput = document.querySelector(".message-input input");
const sendButton = document.querySelector(".message-input button");
const voiceButton = document.querySelector(".voice-input button");

sendButton.addEventListener("click", () => {
  const messageText = messageInput.value.trim();
  if (messageText !== "") {
    sendMessage(messageText);
    messageInput.value = "";
  }
});

voiceButton.addEventListener("click", startVoiceCapture);

// Function to handle voice input using Web Speech API
function startVoiceCapture() {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = 'en-US';

  recognition.onresult = function(event) {
    const voiceText = event.results[0][0].transcript;
    sendMessage(voiceText);
  }

  recognition.start();
}

function sendMessage(text) {
  const message = document.createElement("div");
  message.classList.add("message", "outgoing");
  message.innerHTML = `<div class="message-content">${text}</div>`;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
