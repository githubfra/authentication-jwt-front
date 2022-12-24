import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';

import injectContext from "./store/Context";

import  Login  from "./views/Login";
import  Registration  from "./views/Registration";
import  Private  from "./views/Private";
import { Navbar } from "./components/Navbar";



const App = () => {


    return (
        <div>
            <BrowserRouter>
           
                    <Navbar />
                    <Routes>

                        <Route element={<Login />} path="/login" />
                        <Route element={<Registration />} path="/registration" />
                        <Route element={<Private />} path="/private" />
                        
                    </Routes>
                  
               
            </BrowserRouter>
        </div>
    );
};

export default injectContext(App);
