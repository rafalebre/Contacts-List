import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Contact from './views/Contact';
import AddContact from './views/AddContact';
import injectContext from './store/appContext';

const Layout = () => {
  return (
    <div className="d-flex flex-column">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/add" element={<AddContact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default injectContext(Layout);