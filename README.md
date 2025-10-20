# odin-message-board

This is a project submission for The Odin Project Node Course, Project: Mini Message Board.

The goal of this project is to familiarize myself even more into Node.js ecosystem using Express, EJS, Postgres:

- how to handle routing
- middlewares as controllers
- errors
- viewing with EJS
- Postgres database with Neon as its hosting
- Render for deployment, connecting with Neon

To recreate locally:

- clone this project and install the dependencies
- create a `.env` file with `DB_URL=<your-postgres-connection>` variable inside
- run `npm run seed` to seed the database with required table, records
- then run `npm run server`.
