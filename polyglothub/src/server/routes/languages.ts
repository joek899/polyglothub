import express from 'express';
import sqlite3 from 'sqlite3';
import { initDatabase } from '../db';

const router = express.Router();
const db = initDatabase();

router.post('/', (req, res) => {
  const { name, code } = req.body;
  db.run(
    INSERT INTO languages (name, code, is_approved)
     VALUES (?, ?, FALSE),
    [name, code],
    function (err) {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ id: this.lastID, name, code, status: 'Pending approval' });
    }
  );
});

router.get('/', (req, res) => {
  db.all(
    SELECT name, code, is_approved FROM languages,
    [],
    (err, languages) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(languages);
    }
  );
});

// Admin endpoint (simplified; add auth in production)
router.patch('/approve/:code', (req, res) => {
  db.run(
    UPDATE languages SET is_approved = TRUE WHERE code = ?,
    [req.params.code],
    function (err) {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ message: Language  approved });
    }
  );
});

export default router;
