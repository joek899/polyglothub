import { useState } from 'react';
import axios from 'axios';

function Search() {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('en');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(http://localhost:5000/api/words//);
      setResult(response.data);
    } catch (error) {
      setResult({ error: 'Word not found or server error' });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Search Dictionary</h1>
      <div className="mb-4">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter word"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="Language code (e.g., en)"
          className="border p-2 mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white p-2 rounded">
          Search
        </button>
      </div>
      {result && (
        <div>
          {result.error ? (
            <p className="text-red-600">{result.error}</p>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold">
                {result.word.word} ({result.word.language_name})
              </h2>
              <p><strong>Part of Speech:</strong> {result.word.part_of_speech || 'N/A'}</p>
              <p><strong>Pronunciation:</strong> {result.word.pronunciation || 'N/A'}</p>
              <p><strong>Definition:</strong> {result.word.definition || 'N/A'}</p>
              <p><strong>Example:</strong> {result.word.example || 'N/A'}</p>
              <h3 className="text-xl font-semibold mt-4">Translations:</h3>
              <ul>
                {result.translations.map((t: any) => (
                  <li key={t.target_code}>
                    {t.translation} ({t.target_language}, Rating: {t.rating})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
