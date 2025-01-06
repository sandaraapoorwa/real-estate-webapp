import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Helmet } from 'react-helmet';
import DOMPurify from 'dompurify';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Properties from './components/properties/Properties';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const PageContainer = ({ children }) => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  // Example of using DOMPurify to sanitize content
  const sanitizeContent = (content) => {
    return { __html: DOMPurify.sanitize(content) };
  };

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Helmet>
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self'; script-src 'self' https://maps.googleapis.com; img-src 'self' data: https://maps.gstatic.com; style-src 'self' 'unsafe-inline'; font-src 'self'; frame-src https://www.google.com https://maps.googleapis.com;"
          />
        </Helmet>
        <Header />
        <main className="flex-grow-1">
          <PageContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageContainer>
        </main>
        <Footer />
        {/* Example of using sanitized content */}
        {/* <div dangerouslySetInnerHTML={sanitizeContent("<p></p>")} /> */}
      </div>
    </Router>
  );
}

export default App;

