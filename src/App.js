import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import FormPropsTextFields from "./components/LoginForm/LoginForm";
import PopularPage from "./components/PopularPage"
import ProtectedRoute from "./Routes/protectedRoute";
import PrivateRoute from "./Routes/privateRoute";
import InTrandsPage from "./components/InTrandPage";

function App() {
    return (
        <div>
            <ResponsiveAppBar/>
            <Routes>
                <Route path='/' element={<PopularPage/>}/>
                <Route path='/login' element={
                    <ProtectedRoute>
                        <FormPropsTextFields/>
                    </ProtectedRoute>}/>
                <Route path='/news' element={<InTrandsPage/>}/>
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
