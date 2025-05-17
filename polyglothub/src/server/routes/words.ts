import express from 'express';
import sqlite3 from 'sqlite3';
import { initDatabase } from '../db';

const router = express.Router();
const db = initDatabase();

router.get('/:word/:languageCode', (req, res) => {
  const { word, languageCode } = req.params;
  db.get(
    SELECT w.*, l.name as language_name
     FROM words w
     JOIN languages l ON w.language_id = l.id
     WHERE w.word = ? AND l.code = ?,
    [word, languageCode],
    (err, wordData) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!wordData) return res.status(404).json({ error: 'Word not found' });

      db.all(
        SELECT t.translation, l.name as target_language, l.code as target_code, t.rating
         FROM translations t
         JOIN languages l ON t.target_language_id = l.id
         WHERE t.word_id = ?,
        [wordData.id],
        (err, translations) => {
          if (err) return res.status(500).json({ error: err.message });
          res.json({ word: wordData, translations });
        }
      );
    }
  );
});

router.post('/', (req, res) => {
  const { word, languageCode, part_of_speech, pronunciation, definition, example } = req.body;
  db.get(
    'SELECT id FROM languages WHERE code = ? AND is_approved = TRUE',
    [languageCode],
    (err, lang) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!lang) return res.status(400).json({ error: 'Language not found or unapproved' });

      db.run(
        INSERT INTO words (word, language_id, part_of_speech, pronunciation, definition, example)
         VALUES (?, ?, ?, ?, ?, ?),
        [word, lang.id, part_of_speech, pronunciation, definition, example],
        function (err) {
          if (err) return res.status(400).json({ error: err.message });
          res.json({ id: this.lastID, word });
        }
      );
    }
  );
});

router.post('/translation', (req, res) => {
  const { wordId, translation, targetLanguageCode } = req.body;
  db.get(
    'SELECT id FROM languages WHERE code = ? AND is_approved = TRUE',
    [targetLanguageCode],
    (err, lang) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!lang) return res.status(400).json({ error: 'Target language not found or unapproved' });

      db.run(
        INSERT INTO translations (word_id, translation, target_language_id)
         VALUES (?, ?, ?),
        [wordId, translation, lang.id],
        function (err) {
          if (err) return res.status(400).json({ error: err.message });
          res.json({ id: this.lastID, translation });
        }
      );
    }
  );
});

export default router;
