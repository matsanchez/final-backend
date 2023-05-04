import { addMessage, loadMessages } from "./socket.js";
import { appendMessage, renderMessages } from "./ui.js";

addMessage(appendMessage);
loadMessages(renderMessages);
