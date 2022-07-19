import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About/About';
import Work from './pages/Work/Work';
import Skills from './pages/Skills/Skills';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Header />
        <Routes>

          <Route exact path="/" element={<About />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/skills" element={<Skills />} />
     
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
