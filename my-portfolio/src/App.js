import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Ideas from './pages/Ideas';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter basename="/Faceless_Website">
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
