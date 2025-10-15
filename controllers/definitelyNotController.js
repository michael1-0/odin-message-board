import { data, i } from "../data.js";
import { MessageNotFound } from "../errors/MessageNotFound.js";

const messages = data;
let index = i;

export function getRoot(req, res) {
  res.render("index", { title: "Home", messages: messages });
}

export function getForm(req, res) {
  res.render("form", { title: "New message" });
}
export function postForm(req, res) {
  const { user, textz } = req.body;

  messages.push({ id: index++, text: textz, user: user, added: new Date() });

  res.status(300).redirect("/");
}

export function getMessageById(req, res) {
  const index = Number(req.params.id) - 1;
  const message = messages[index];

  if (!message) {
    throw new MessageNotFound("Message not found");
  }

  res.render("message", {
    title: `Viewing message by ${message.user}`,
    message,
  });
}
