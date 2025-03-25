import logo from './logo.svg';
import './App.css';
import { Menu } from 'antd';
import { Link, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import HealthRecords from './HealthRecords';
//import { BrowserRouter } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const Content = () => {

    return (
      <div>Content
        <Routes>

          {/* <Route path='/' element={<Home />} /><Route /> */}
          <Route path='/' element={<div>Home</div>} /><Route />
          {/* <Route path='/dashboard' element={<div>Dashboard</div>} /><Route /> */}
          <Route path='/dashboard' element={<Dashboard />} /><Route />

          <Route path='/healthrecords' element={<HealthRecords />} /><Route />
          <Route path='/vacinations' element={<div>vacinations</div>} /><Route />
          <Route path='/feedingplans' element={<div>feedingplans</div>} /><Route />
          <Route path='/specialneeds' element={<div>specialneeds</div>} /><Route />

          <Route path='/usersList' element={<div>Users List</div>} /><Route />
          <Route path='/activeusers' element={<div>Active Users</div>} /><Route />
          <Route path='/disabledusers' element={<div>Disable Users</div>} /><Route />
          <Route path='/profile' element={<div>Profile</div>} /><Route />
          {/* <Route path='/addproducts' element={<AddProducts />} /><Route /> */}
          {/* <Route path='/addproductss' element={<AddProducts1 />} /><Route />
          <Route path='/edit' element={<Edit />} /><Route />
          <Route path='/edit/:id' element={<Edit />} /><Route />
          <Route path='/edit/:id/:firstName/:lastName/:salary/:date' element={<Edit />} /><Route />

          <Route path='/edit1' element={<Edit1 />} /><Route />
          <Route path='/edit2' element={<Edit2 />} /><Route /> */}

        </Routes>




      </div>
    )
  }




  return (
    // <div className="App">

      <div className="App" style={{ display: "flex", flexDirection: "row" }}>
        <Menu onClick={({ key }) => {
          if (key === "signout") {
            //todo
          } else {

            navigate(key);
          }
        }}


          items={[
            { label: "Home", key: "/" },
            // { label: "Dashboard", key: "/dashboard" },
            { label: "Profile data categories", key: "/dashboard",
              children: [
                { label: "Heatlh records", key: "/healthrecords" },
                { label: "Vacinations", key: "/vacinations" },
                { label: "Feeding plans", key: "/feedingplans" },
                { label: "Special neeeds", key: "/specialneeds" },

              ] 
          
            
            },
            {
              label: "Users List", key: "/usersList",
              children: [
                { label: "Active Users", key: "/activeusers" },
                { label: "Disable Users", key: "/disabledusers" },
              ]

            },
            { label: "Profile", key: "/profile" },
            { label: "Sign Out", key: "/signout" }

          ]}


        ></Menu>
        {/* <div>Content</div> */}
        <Content />
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
      {/* </div> */}










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
    </div>
  );
}

export default App;
