import { sql } from "./db.js";

sql`DROP TABLE IF EXISTS videos;`.then(() => console.log("Table dropped!"));

sql`CREATE TABLE videos (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  duration INTEGER NOT NULL CHECK (duration >= 0),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`.then(() => console.log("Table created!"));
