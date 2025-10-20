import pool from "./pool.js";

async function getMessages() {
  const { rows } = await pool.query("SELECT id, text, user_name FROM messages");
  return rows;
}

async function insertMessage({ text, userName }) {
  await pool.query("INSERT INTO messages (text, user_name) VALUES ($1, $2)", [
    text,
    userName,
  ]);
}

async function searchMessageById(id) {  
  const { rows } = await pool.query(
    "SELECT id, text, user_name FROM messages WHERE id = $1",
    [id]
  );
  return rows;
}

export { getMessages, insertMessage, searchMessageById };
