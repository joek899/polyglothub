import sqlite3 from 'sqlite3';

export function initDatabase() {
  const db = new sqlite3.Database('polyglothub.db', (err) => {
    if (err) {
      console.error('Database connection error:', err);
      return;
    }
    console.log('Connected to SQLite database.');
  });

  // Create tables
  db.serialize(() => {
    db.run(
      CREATE TABLE IF NOT EXISTS languages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        code TEXT UNIQUE NOT NULL,
        is_approved BOOLEAN DEFAULT FALSE
      )
    );
    db.run(
      CREATE TABLE IF NOT EXISTS words (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        word TEXT NOT NULL,
        language_id INTEGER NOT NULL,
        part_of_speech TEXT,
        pronunciation TEXT,
        definition TEXT,
        example TEXT,
        FOREIGN KEY (language_id) REFERENCES languages(id),
        UNIQUE(word, language_id)
      )
    );
    db.run(
      CREATE TABLE IF NOT EXISTS translations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        word_id INTEGER NOT NULL,
        translation TEXT NOT NULL,
        target_language_id INTEGER NOT NULL,
        rating INTEGER DEFAULT 0,
        FOREIGN KEY (word_id) REFERENCES words(id),
        FOREIGN KEY (target_language_id) REFERENCES languages(id)
      )
    );
  });

  return db;
}
