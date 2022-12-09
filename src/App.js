import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Lookbook from './pages/Lookbook';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home/> */}
      {/* <Lookbook/> */}
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Lookbook" element={<Lookbook />} />
    </Routes>
    </div>
  );
}

export default App;
