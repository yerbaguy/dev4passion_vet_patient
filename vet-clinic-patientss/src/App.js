import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

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

      <Router>
        <Routes>
          <Route path='/' element={<Home />} /><Route />
          <Route path='/header' element={<Header />} /><Route />
          {/* <Route path='/addproductss' element={<AddProducts1 />} /><Route />
          <Route path='/edit' element={<Edit />} /><Route />
          <Route path='/edit/:id' element={<Edit />} /><Route />
          <Route path='/edit/:id/:firstName/:lastName/:salary/:date' element={<Edit />} /><Route />

          <Route path='/edit1' element={<Edit1 />} /><Route />
          <Route path='/edit2' element={<Edit2 />} /><Route /> */}
        </Routes>
      </Router>


    </div>
  );
}

export default App;
