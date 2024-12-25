import logo from './logo.svg';
import './App.css';
import Sitebar from './components/Sitebar';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Overview from './pages/Overview';

function App() {
  return (

    <div className="App">
      <Router>
        <Sitebar />
        <Routes>
          <Route path='/' element={<Overview />} /><Route />
          {/* <Route path='/addproducts' element={<AddProducts />} /><Route /> */}
          {/* <Route path='/addproductss' element={<AddProducts1 />} /><Route />
          <Route path='/edit' element={<Edit />} /><Route />
          <Route path='/edit/:id' element={<Edit />} /><Route />
          <Route path='/edit/:id/:firstName/:lastName/:salary/:date' element={<Edit />} /><Route />

          <Route path='/edit1' element={<Edit1 />} /><Route />
          <Route path='/edit2' element={<Edit2 />} /><Route /> */}
        </Routes>
      </Router>

    </div>

    // <Router>
    //   <Sitebar />
    // </Router>

    // <div className="App">

    //   <h1>Yooooo</h1>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
