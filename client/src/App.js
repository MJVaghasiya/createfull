import './App.css'
import React, { createContext, useReducer } from 'react';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Contact from './components/Contact';
import AboutCompany from './components/AboutCompany';
import Logout from './components/Logout';
import {initialState, reducer } from './components/reducer/useReducer'

export const UserContext = createContext();



const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/About' element={<AboutCompany />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Logout' element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  const { state, dispatch } = useReducer(reducer, initialState);

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <Routing />
      </UserContext.Provider>
    </div>
  );
}
export default App;