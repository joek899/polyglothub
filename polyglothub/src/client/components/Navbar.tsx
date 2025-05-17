import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">PolyglotHub</Link>
        <div className="space-x-4">
          <Link to="/search" className="text-white hover:text-blue-200">Search</Link>
          <Link to="/contribute" className="text-white hover:text-blue-200">Contribute</Link>
          <Link to="/add-language" className="text-white hover:text-blue-200">Add Language</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
