import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Regions from './components/regions';
import Countries from './components/countries';
import Details from './components/details';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Regions />} />
        <Route path="/countries/:region" element={<Countries />} />
        <Route path="/details/:country" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
