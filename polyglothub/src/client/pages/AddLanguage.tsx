import { useState } from 'react';
import axios from 'axios';

function AddLanguage() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleAddLanguage = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/languages', { name, code });
      setMessage(Language submitted:  ());
    } catch (error) {
      setMessage('Error adding language: ' + error.response?.data?.error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Add a New Language</h1>
      <p className="mb-4">
        Propose a new language for PolyglotHub. Use an ISO 639-3 code if available, or a unique identifier for constructed/undocumented languages.
      </p>
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Language name (e.g., Swahili)"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Language code (e.g., sw)"
          className="border p-2 mb-2 w-full"
        />
        <button onClick={handleAddLanguage} className="bg-blue-600 text-white p-2 rounded">
          Submit Language
        </button>
      </div>
      {message && <p className="text-green-600">{message}</p>}
    </div>
  );
}

export default AddLanguage;
