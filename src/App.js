import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Regions from './components/regions';
import Countries from './components/countries';
import Details from './components/details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Regions />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
