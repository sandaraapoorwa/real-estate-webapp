import { useState } from 'react'
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Header/>
        <Home/>
        <About/>
        <Contact />
        
      </div>
    </>
  )
}

export default App
