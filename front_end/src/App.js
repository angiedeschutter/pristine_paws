import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"
import NavBar from "./Components/NavBar"
import Services from "./Components/Services"
import Footer from './Components/Footer'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import AddService from './Components/AddService'
import CurrentUserProvider from './contexts/CurrentUser'
import Account from './Components/Account'
import Edit from './Components/Edit'

function App() {
  //Sets document title
  useEffect(() => {
    document.title = "MS3";
  }, []);

  return (
    <CurrentUserProvider>
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/addservice' element={<AddService />} />
          <Route path='/account' element={<Account />} />
          <Route path='/edit/:service_id' element={<Edit />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
    </CurrentUserProvider>
  );
}

export default App;