import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import FormPropsTextFields from "./components/LoginForm/LoginForm";
import ProtectedRoute from "./Routes/protectedRoute";

function App() {
    return (
        <div>
            <ResponsiveAppBar/>
            <Routes>
                {/*<ProtectedRoute>*/}
                    <Route path='/login' element={<FormPropsTextFields/>}/>
                {/*</ProtectedRoute>*/}
                <Route path='/news' element={<p>NEWS</p>}/>
                <Route path='/profile' element={<p>PROFILE</p>}/>
            </Routes>
        </div>
    );
}

export default App;
