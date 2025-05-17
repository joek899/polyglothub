function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to PolyglotHub</h1>
      <p className="text-lg mb-4">
        PolyglotHub is an open-source platform for creating and exploring multilingual dictionaries.
        Contribute to existing languages or add new ones, including lesser-known or constructed languages.
      </p>
      <p className="text-lg">
        Get started by <a href="/search" className="text-blue-600 underline">searching for words</a> or
        <a href="/contribute" className="text-blue-600 underline"> contributing to the dictionary</a>.
      </p>
    </div>
  );
}

export default Home;
