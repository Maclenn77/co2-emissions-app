import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Regions from './components/regions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Regions />} />
      </Routes>
    </Router>
  );
}

export default App;
