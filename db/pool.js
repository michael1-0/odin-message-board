import { config } from "dotenv";
import { Pool } from "pg";

config();

export default new Pool({
  connectionString: process.env.DB_URL,
});
