import { Client } from "pg";
import { config } from "dotenv";

config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255),
  user_name VARCHAR(255),
  added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, user_name) 
VALUES
  ('Hi there!', 'Amando'),
  ('Hello World!', 'Charles');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  try {
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  } catch (error) {
    console.log(error);
  } finally {
    client.end();
  }
}

main();
