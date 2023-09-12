import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Blogs from './Components/blog/Blogs';
import Nav from './Components/common/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './Components/blog/Blog';
import Home from './Components/Home/Home';
import ConsultationForm from './Components/consultationForm/ConsultationForm';
import GetMedicine from './Components/getMedicine/GetMedicine';
import Faqs from './Components/Faqs/Faqs';
import OurTeam from './OurTeam';
import Services from './Components/Services/Services';
import ContactUs from './Components/ContactUs/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <BrowserRouter basename="/atul/frontend/react/">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/online-consultation-form" element={<ConsultationForm />} />
        <Route path="/how-to-get-medicine/" element={<GetMedicine />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/our-team/" element={<OurTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
