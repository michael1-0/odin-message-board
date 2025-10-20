import { MessageNotFound } from "../errors/MessageNotFound.js";
import {
  getMessages,
  insertMessage,
  searchMessageById,
} from "../db/queries.js";

async function getRoot(req, res) {
  const result = await getMessages();
  res.render("index", { title: "Home", messages: result });
}

function getForm(req, res) {
  res.render("form", { title: "New message" });
}

async function postForm(req, res) {
  const { user, textz } = req.body;

  await insertMessage({ text: textz, userName: user });
  res.status(300).redirect("/");
}
async function getMessageById(req, res) {
  const row = await searchMessageById(req.params.id);
  if (!row) {
    throw new MessageNotFound("Message not found");
  }
  res.render("message", {
    title: `Viewing message by ${row.user}`,
    message: { id: row[0].id, text: row[0].text, user: row[0].user_name },
  });
}

export { getRoot, getForm, postForm, getMessageById };
