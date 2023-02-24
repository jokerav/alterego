import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import FormPropsTextFields from "./components/LoginForm/LoginForm";
import PopularPage from "./components/PopularPage"
import ProtectedRoute from "./Routes/protectedRoute";
import PrivateRoute from "./Routes/privateRoute";
import TopRatedPage from "./components/topRatedPage";
import ProfilePage from "./components/profile";
import MovieDetails from "./components/MovieDetails";
import ErrorPage from "./components/errorPage";

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
                <Route path='/news' element={<TopRatedPage/>}/>
                <Route path='/profile' element={
                    <PrivateRoute>
                        <ProfilePage/>
                    </PrivateRoute>}/>
                <Route path="movies/:movieId" element={<MovieDetails/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
