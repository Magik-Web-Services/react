import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Blogs from './Components/blogs/Blogs';
import Nav from './Components/common/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './Components/blogs/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter basename="/atul/frontend/react/">
      <Nav />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
