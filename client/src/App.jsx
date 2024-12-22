import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Add this line

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;

