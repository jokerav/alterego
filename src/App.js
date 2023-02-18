import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path='/' element={<p>Main page</p>}/>
        <Route path='/news' element={<p>NEWS</p>}/>
        <Route path='/profile' element={<p>PROFILE</p>}/>
      </Routes>
  );
}

export default App;
