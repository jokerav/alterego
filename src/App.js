import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path='/' element={<p>Main page</p>}/>
        <Route path='/news' element={<p>News</p>}/>
      </Routes>
  );
}

export default App;
