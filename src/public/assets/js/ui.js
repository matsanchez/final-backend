import { setMessage } from "./socket.js";

const DOMroomChat = document.getElementById("roomChat");
const DOMchat = document.getElementById("formChat");
DOMchat.addEventListener("submit", (e) => chatHandleSubmit(e, e.target));

export const chatHandleSubmit = (e, form) => {
  e.preventDefault();
  let formData = new FormData(form);
  let obj = {};
  formData.forEach((value, key) => (obj[key] = value));
  setMessage(obj);
  document.getElementById("textarea").value = "";
};

const messageUI = (message) => {
  const li = document.createElement("li");
  li.classList.add("bg-light", "p-1", "list-unstyled");
  li.innerHTML = `
                  <strong class="text-primary">${message.email}</strong>:
                  <strong class="text-danger">[${message.createdAt}]</strong>
                  <em class="text-success">:${message.text}</em>
                  `;
  return li;
};

export const renderMessages = (messages) => {
  messages.forEach((message) => {
    DOMroomChat.append(messageUI(message));
  });
};

export const appendMessage = (message) => {
  DOMroomChat.append(messageUI(message));
};
