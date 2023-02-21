import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import FormPropsTextFields from "./components/LoginForm/LoginForm";
import PopularPage from "./components/PopularPage"
import ProtectedRoute from "./Routes/protectedRoute";
import PrivateRoute from "./Routes/privateRoute";

function App() {
    return (
        <div>
            <ResponsiveAppBar/>
            <Routes>
                <Route path='/' element={<p>Main page</p>}/>
                <Route path='/login' element={
                    <ProtectedRoute>
                        <FormPropsTextFields/>
                    </ProtectedRoute>}/>
                <Route path='/popular' element={<PopularPage/>}/>
                <Route path='/profile' element={
                    <PrivateRoute>
                        <p>PROFILE</p>
                    </PrivateRoute>}/>
                <Route path="*" element={<p>ErrorPage</p>}/>
            </Routes>
        </div>
    );
}

export default App;
