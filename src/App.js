import {Routes, Route, HashRouter} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <HashRouter basename="/">
    
    <div className="App">
          <Navbar />
      
      <div className='pages'>
        <Routes >
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>

    </div>

    </HashRouter>
  );
}

export default App;
