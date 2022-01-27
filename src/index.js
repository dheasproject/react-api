import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './Home';
import Detail from './movie/details';
import Fav from './movie/fav';



import Main from './Main';
import reportWebVitals from './reportWebVitals';
import Register from "./register";
import Login from "./Login";

ReactDOM.render(
  	<div>
	  <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
		<Route path="/login" element={<Login />} />
		<Route path="/home" element={<Home />} />
		<Route path="/details" element={<Detail />} />


        <Route path="/fav" element={<Fav />} />
      </Routes>
      </BrowserRouter>,
	</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
