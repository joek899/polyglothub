# PolyglotHub

PolyglotHub is an open-source multilingual dictionary platform where users can contribute to existing languages, add new languages (including low-resource or constructed ones), and use the website as a dictionary. Built with React, Express, and SQLite, it’s designed for collaboration and accessibility.

## Features
- Search for words, definitions, translations, and examples.
- Contribute words, translations, and metadata (e.g., pronunciation, part of speech).
- Propose new languages with unique codes (ISO 639-3 or custom).
- Community-driven moderation with rating system.
- Export dictionary data as JSON/CSV.
- Translatable UI via Weblate integration.

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/polyglothub.git
   cd polyglothub
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend:
   ```bash
   npm run server
   ```
4. Start the frontend:
   ```bash
   npm run client
   ```

### Usage
- Visit `http://localhost:3000` to access the website.
- Use the "Search" page to look up words.
- Use the "Contribute" page to add words or translations.
- Use the "Add Language" page to propose new languages.

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute code, translations, or new languages.

## License
MIT License

## Acknowledgments
Inspired by FreeDict, Wordset, and Weblate.
