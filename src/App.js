import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';

function App() {
  return (
    <ResumeState>
      <div className="App">
        <Helmet>
          <title>Career Craft - Create Professional Resumes Online</title>
          <meta name="description" content="Build and customize professional resumes online with Career Craft. Choose from a variety of templates and create your perfect resume easily." />
          <meta name="keywords" content="resume builder, professional resumes, online resumes, resume templates" />
          <meta name="author" content="Shubham , Yuvraj ,Roshni ,Vijay" />
          <meta property="og:title" content="Career Craft - Create Professional Resumes Online" />
          <meta property="og:description" content="Build and customize professional resumes online with Career Craft. Choose from a variety of templates and create your perfect resume easily." />
          <meta property="og:image" content="" />
          <meta property="og:url" content="https://shubhampatidar.vercel.app/" />
          <meta property="og:type" content="website" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
