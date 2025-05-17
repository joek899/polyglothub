import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Contribute from './pages/Contribute';
import AddLanguage from './pages/AddLanguage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/add-language" element={<AddLanguage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
