import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase } from './db';
import wordRoutes from './routes/words';
import languageRoutes from './routes/languages';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize database
initDatabase();

// Routes
app.use('/api/words', wordRoutes);
app.use('/api/languages', languageRoutes);

app.listen(PORT, () => {
  console.log(Server running on port );
});
