import React from 'react';
// @ts-ignore
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import Navigation from './Routes/navigation';
import Articles from "./Components/articles";
import Login from "./Components/login";
import './App.css';
import Home from "./Routes/home";

function App() {

  return (
    <div>
        <BrowserRouter>
        <Login />
        <Articles />
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
