import {Routes, Route, HashRouter} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className="App">
        <HashRouter basename="/">
          <Navbar />
      <div className='pages'>
        <Routes >
          <Route exact path='/' element={<Home />} />
        </Routes>

      </div>
        </HashRouter>
    </div>
  );
}

export default App;
