import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
// import ResponsiveAppBar from "./components/AppBar/AppBar";
import FormPropsTextFields from "./components/LoginForm/LoginForm";

function App() {
  return (
      // <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<FormPropsTextFields/>}/>
        <Route path='/news' element={<p>NEWS</p>}/>
        <Route path='/profile' element={<p>PROFILE</p>}/>
      </Routes>
  );
}

export default App;
