import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { regions } from './api/codes';
import Regions from './components/regions';
import { getCo2DataApi } from './redux/co2Emissions/co2Emissions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCo2DataApi(regions));
}, []);

  return (
    <div className="App">
        <Regions />
    </div>
  );
}

export default App;
