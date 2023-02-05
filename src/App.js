import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import BlogpostSummary from "./pages/blogpostSummary/BlogpostSummary";
import BlogpostPage from "./pages/blogpostPage/BlogpostPage";
import Login from "./pages/login/Login";

function App() {
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <>
     <Navigation isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>
        <Routes>
            <Route path="/" element={<Home isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>}/>
            <Route path="/login" element={<Login isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>}/>
            <Route path="/blogposts" element={isAuthenticated ? <BlogpostSummary/> : <Navigate to="/login" />}/>
            <Route path="/blogposts/:id" element={isAuthenticated ? <BlogpostPage/> : <Navigate to="/login"/>}/>
        </Routes>
    </>
  );
}

export default App;