import './App.css';
import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar/AppBar";

function App() {
  return (
      <Routes>
        <Route path='/' element={<ResponsiveAppBar/>}/>
        <Route path='/news' element={<p>NEWS</p>}/>
        <Route path='/profile' element={<p>PROFILE</p>}/>
      </Routes>
  );
}

export default App;
