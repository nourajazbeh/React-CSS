import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Home from './Pages/Home'; 
import About from './Pages/About';  
import Contact from './Pages/Contact'; 
import Login from './Pages/Login'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

