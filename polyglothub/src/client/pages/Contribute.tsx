import { useState } from 'react';
import axios from 'axios';

function Contribute() {
  const [word, setWord] = useState('');
  const [languageCode, setLanguageCode] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [pronunciation, setPronunciation] = useState('');
  const [definition, setDefinition] = useState('');
  const [example, setExample] = useState('');
  const [translation, setTranslation] = useState('');
  const [targetLanguageCode, setTargetLanguageCode] = useState('');
  const [message, setMessage] = useState('');

  const handleAddWord = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/words', {
        word,
        languageCode,
        part_of_speech: partOfSpeech,
        pronunciation,
        definition,
        example,
      });
      setMessage(Word added:  (ID: ));
    } catch (error) {
      setMessage('Error adding word: ' + error.response?.data?.error);
    }
  };

  const handleAddTranslation = async () => {
    try {
      const wordId = prompt('Enter word ID:');
      if (!wordId) return;
      const response = await axios.post('http://localhost:5000/api/words/translation', {
        wordId: parseInt(wordId),
        translation,
        targetLanguageCode,
      });
      setMessage(Translation added: );
    } catch (error) {
      setMessage('Error adding translation: ' + error.response?.data?.error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contribute to PolyglotHub</h1>
      <h2 className="text-2xl mb-2">Add a Word</h2>
      <div className="mb-4">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Word"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          value={languageCode}
          onChange={(e) => setLanguageCode(e.target.value)}
          placeholder="Language code (e.g., en)"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          value={partOfSpeech}
          onChange={(e) => setPartOfSpeech(e.target.value)}
          placeholder="Part of speech"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          value={pronunciation}
          onChange={(e) => setPronunciation(e.target.value)}
          placeholder="Pronunciation (e.g., /ˈheloʊ/)"
          className="border p-2 mb-2 w-full"
        />
        <textarea
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          placeholder="Definition"
          className="border p-2 mb-2 w-full"
        />
        <textarea
          value={example}
          onChange={(e) => setExample(e.target.value)}
          placeholder="Example sentence"
          className="border p-2 mb-2 w-full"
        />
        <button onClick={handleAddWord} className="bg-blue-600 text-white p-2 rounded">
          Add Word
        </button>
      </div>
      <h2 className="text-2xl mb-2">Add a Translation</h2>
      <div className="mb-4">
        <input
          type="text"
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
          placeholder="Translation"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          value={targetLanguageCode}
          onChange={(e) => setTargetLanguageCode(e.target.value)}
          placeholder="Target language code"
          className="border p-2 mb-2 w-full"
        />
        <button onClick={handleAddTranslation} className="bg-blue-600 text-white p-2 rounded">
          Add Translation
        </button>
      </div>
      {message && <p className="text-green-600">{message}</p>}
    </div>
  );
}

export default Contribute;
